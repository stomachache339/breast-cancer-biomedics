import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/* const T = 'T2';  
const N = 'N1';  
const M = 'M0';   */


const URL = 'https://jsonplaceholder.typicode.com/posts';


/* const URL = `http://172.18.107.127:8080/get_stage_info?t_label=${T}&n_label=${N}&m_label=${M}`; */

// Se crea la espera del objeto biomedicosObj para poder hacer la petición al servicio
export const submitBiomedicos = createAsyncThunk('biomedicos/submitBiomedicos', async (biomedicosObj/* , {rejectWithValue} */) => {

    /* si el objeto biomedicos no está completo, la peticion fallará y el estado que regresará submitBiomedicos va a ser failed */

    /* const isBiomedicosComplete = (biomedicos) => {
        const { personales, familiares, estadia, antecedentes } = biomedicos;

        return personales.edad && personales.sexo && personales.talla && personales.peso &&
               familiares.ascendente && familiares.lateral && familiares.descendente &&
               estadia.T && estadia.N && estadia.M &&
               antecedentes.RP && antecedentes.RE && antecedentes.HER2 && antecedentes.Grade;
    };

    if (!isBiomedicosComplete(biomedicosObj)){
        return rejectWithValue('complete todos los campos');
    } */


    /* si es exitoso, se guardará en response.data y esos datos serán el payload del caso fullfiled, estos datos se usan en el componente app.jsx */
    const response = await axios.post(URL, biomedicosObj);
    return response.data;
});

/* se declara la estructura del objeto que se enviará ala API */
const biomedicosSlice = createSlice({
    name: 'biomedicos',
    initialState: {
        personales: {
            edad: '',
            sexo: '',
            talla: '',
            preferencia: '',
            peso: '',
            gineco: '',
            indice: '',
            comorbilidades: {
                sincomor: false,
                diabetes: false,
                hiper: false,
                vih: false,
            },
            droga: '',
            alcohol: '',
        },
        familiares: {
            ascendente: '',
            lateral: '',
            descendente: '',
        },
        estadia: {
            T: '',
            N: '',
            M: '',
        },
        antecedentes: {
            RP: '',
            RE: '',
            HER2: '',
            Grade: '',
        },
        Info: {
            estadiaInfo: '',
            familiaresInfo: '',
            personalInfo: '',
            ginecoInfo: '',
        },
        results: null,
        status: 'idle',
        error: null,
    },
    reducers: { /* todas las acciones posibles que serán accesibles por los demas componentes */
        updatePersonales: (state, action) => {
            state.personales = { ...state.personales, ...action.payload };
        },
        updateComorbilidades: (state, action) => {
            state.comorbilidades = { ...state.comorbilidades, ...action.payload };
        },
        updateFamiliares: (state, action) => {
            state.familiares = { ...state.familiares, ...action.payload };
        },
        updateEstadia: (state, action) => {
            state.estadia = { ...state.estadia, ...action.payload };
        },
        updateAntecedentes: (state, action) => {
            state.antecedentes = { ...state.antecedentes, ...action.payload };
        },
        // reducers de las etiquetas de información en los botones del acordeón

        updateInfo: (state) => {

            console.log('hola');
            const { personales, familiares, estadia, antecedentes } = state;

            const { edad, sexo, gineco } = personales;
            if (edad && sexo && gineco) {
                state.Info.personalInfo = `Edad: ${edad}, Sexo: ${sexo}, Ginecológicos: ${gineco}`;
                console.log(state.Info.personalInfo);
            }
            
            const { ascendente, lateral, descendente } = familiares;

            if (ascendente && lateral && descendente ) {
                state.Info.familiaresInfo = `Ascendente: ${ascendente}, Lateral: ${lateral}, Descendente: ${descendente}`;
            }
            
            const { T, N, M } = estadia;
            
            if ( T && N && M ) {
                state.Info.estadiaInfo = `T: ${T}, N: ${N}, M: ${M}`;
            }

            const { RP, RE, HER2, Grade } = antecedentes;
            if(RP && RE && HER2 && Grade){
                state.Info.ginecoInfo = `RP: ${RP}, RE: ${RE}, HER2: ${HER2}, Grade: ${Grade}`;
            }
        },
    }, 
    /* acciones que ocurrirán dependiendo del estado de la petición */
    extraReducers: (builder) => {
        builder
            .addCase(submitBiomedicos.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(submitBiomedicos.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.results = action.payload;
            })
            .addCase(submitBiomedicos.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

/* se exportan todas las acciones */

export const {
    updatePersonales,
    updateComorbilidades,
    updateFamiliares,
    updateEstadia,
    updateAntecedentes,
    updateInfo,
} = biomedicosSlice.actions;

export default biomedicosSlice.reducer;
