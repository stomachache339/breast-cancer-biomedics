import { useDispatch, useSelector } from 'react-redux';
import { updateAntecedentes } from '../../redux/biomedicosSlice'; 

const GinecoForm = () => {
    const dispatch = useDispatch();
    const gineco = useSelector((state) => state.biomedicos.antecedentes);

    /* guardará la información del input en el objeto biomedicos, haciendo distinción entre los tipos de input */
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateAntecedentes({ [name]: value }));
        console.log('Estado actualizado', gineco)
    };

    return (
        <table className="table">
            <tbody>
                <tr>
                    <td>Receptores de progesterona</td>
                    <td>
                        <select 
                            className="form-select" 
                            name="RP" 
                            id="RP" 
                            defaultValue=""
                            onChange={handleChange}
                        >
                            <option value="" disabled>Selecciona una opción</option>
                            <option value="Positivo">Positivo</option>
                            <option value="Negativo">Negativo</option>
                        </select>
                    </td>
                    <td>Receptores de estrógeno</td>
                    <td>
                        <select 
                            className="form-select" 
                            name="RE" 
                            id="RE" 
                            defaultValue=""
                            onChange={handleChange}
                        >
                            <option value="" disabled>Selecciona una opción</option>
                            <option value="Positivo">Positivo</option>
                            <option value="Negativo">Negativo</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>HER2</td>
                    <td>
                        <select 
                            className="form-select" 
                            name="HER2" 
                            id="HER2" 
                            defaultValue=""
                            onChange={handleChange}
                        >
                            <option value="" disabled>Selecciona una opción</option>
                            <option value="Positivo">Positivo</option>
                            <option value="Negativo">Negativo</option>
                        </select>
                    </td>
                    <td>Grado histológico</td>
                    <td>
                        <select 
                            className="form-select" 
                            name="Grade" 
                            id="Grade" 
                            defaultValue=""
                            onChange={handleChange}
                        >
                            <option value="" disabled>Selecciona una opción</option>
                            <option value="I">I</option>
                            <option value="II">II</option>
                            <option value="III">III</option>
                            <option value="IV">IV</option>
                        </select>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default GinecoForm;

