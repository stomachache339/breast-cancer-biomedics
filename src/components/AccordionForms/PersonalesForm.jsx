
import { useDispatch, useSelector } from 'react-redux';
import { updatePersonales } from '../../redux/biomedicosSlice';

const PersonalesForm = () => {
  const dispatch = useDispatch();

  
  const personales = useSelector((state) => state.biomedicos.personales);

  /* guardará la información del input en el objeto biomedicos, haciendo distinción entre los tipos de input */
  const save = (e) => {
    const { name, value, type } = e.target;
    if (type === 'radio') {
      /* comorbilidades es un objeto dentro de personales */
      dispatch(updatePersonales({ comorbilidades: { [name]: value === 'true' } }));
    } else {
      dispatch(updatePersonales({ [name]: value }));
    }

    console.log('Estado actualizado', personales)
  };

  return (
    <table className="table">
      <tbody>
        <tr>
          <td>Edad</td>
          <td>
            <input
              className="input-range form-control"
              name="edad"
              id="edad"
              type="range"
              min="0"
              max="100"
              value={personales.edad}
              onChange={save}
            />
            <span id="ageOutput" className="output-range">{personales.edad}</span>
          </td>
        </tr>
        <tr>
          <td>Sexo</td>
          <td colSpan="3">
            <div id="mensajeError" style={{ display: 'none', color: 'red' }}></div>
            <select
              className="form-select"
              name="sexo"
              id="sexo"
              value={personales.sexo}
              onChange={save}
            >
              <option value="">Selecciona una opción</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Intersexual">Intersexual</option>
            </select>
          </td>
          <td>Preferencia</td>
          <td>
            <select
              name="preferencia"
              id="preferencia"
              className="form-select form-control"
              value={personales.preferencia}
              onChange={save}
            >
              <option value="" disabled>Selecciona una opción</option>
              <option value="Heterosexual">Heterosexual</option>
              <option value="Otro">Otro</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Peso</td>
          <td>
            <input
              className="input-range form-control"
              name="peso"
              id="peso"
              type="range"
              min="30"
              max="200"
              value={personales.peso}
              onChange={save}
            />
            <span id="weightOutput" className="output-range">{personales.peso} kg</span>
          </td>
          <td>Talla</td>
          <td>
            <input
              className="input-range form-control"
              name="talla"
              id="talla"
              type="range"
              min="100"
              max="220"
              value={personales.talla}
              onChange={save}
            />
            <span id="heightOutput" className="output-range">{personales.talla} cm</span>
          </td>
        </tr>
        <tr>
          <td>Antecedentes ginecológicos</td>
          <td>
            <select
              className="form-select"
              name="gineco"
              id="gineco"
              value={personales.gineco}
              onChange={save}
            >
              <option value="" disabled>Selecciona una opción</option>
              <option value="Ninguno">Ninguno</option>
              <option value="Premenopausica">Premenopausica</option>
              <option value="Menopausica">Menopausica</option>
            </select>
          </td>
          <td>Indice tabaquico</td>
          <td>
            <select
              className="form-select"
              name="indice"
              id="indice"
              value={personales.indice}
              onChange={save}
            >
              <option value="" disabled>Selecciona una opción</option>
              <option value="Menor de 10">Menor de 10</option>
              <option value="De 10 a 20">De 10 a 20</option>
              <option value="De 21 a 40">De 21 a 40</option>
              <option value="Mas de 41">Mas de 41</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>Comorbilidades</td>
          <td colSpan="2">
            <input
              type="radio"
              id="sincomor"
              name="sincomor"
              value="true"
              checked={personales.comorbilidades.sincomor}
              onChange={save}
            />
            <label htmlFor="sincomor">Ninguna</label>
            <input
              type="radio"
              id="diabetes"
              name="diabetes"
              value="true"
              checked={personales.comorbilidades.diabetes}
              onChange={save}
            />
            <label htmlFor="diabetes">Diabetes</label>
            <input
              type="radio"
              id="hiper"
              name="hiper"
              value="true"
              checked={personales.comorbilidades.hiper}
              onChange={save}
            />
            <label htmlFor="hiper">Hipertensión</label>
            <input
              type="radio"
              id="vih"
              name="vih"
              value="true"
              checked={personales.comorbilidades.vih}
              onChange={save}
            />
            <label htmlFor="vih">VIH</label>
          </td>
          <td>Consumo de drogas</td>
          <td>
            <select
              className="form-select"
              name="drogas"
              id="drogas"
              value={personales.drogas}
              onChange={save}
            >
              <option value="" disabled>Selecciona una opción</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td>Consumo de alcohol</td>
          <td>
            <select
              className="form-select"
              name="alcohol"
              id="alcohol"
              value={personales.alcohol}
              onChange={save}
            >
              <option value="" disabled>Selecciona una opción</option>
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PersonalesForm;




