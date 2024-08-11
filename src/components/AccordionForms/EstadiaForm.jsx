import { useDispatch, useSelector } from 'react-redux';
import { updateEstadia } from '../../redux/biomedicosSlice'; 

const EstadiaForm = () => {

    const dispatch = useDispatch();
    const estadia = useSelector((state) => state.biomedicos.estadia);        

    /* guardará la información del input en el objeto biomedicos, haciendo distinción entre los tipos de input */
    const handleChange = (e) => {
        const { name, value, type } = e.target;
        dispatch(updateEstadia({ [name]: type === 'range' ? Number(value) : value })); //hace la distincion del range para introducir el dato como numérico
      };

    return (
        <table className="table">
      <tbody>
        <tr>
          <td>Número de tumores</td>
          <td>
            <input
              className="input-range form-control"
              name="T"
              id="T"
              type="range"
              min="0"
              max="4"
              value={estadia.T}
              onChange={handleChange}
            />
            <span id="tumorCountOutput" className="output-range">{estadia.T}</span>
          </td>
          <td>Nódulos linfáticos infectados</td>
          <td>
            <input
              className="input-range form-control"
              name="N"
              id="N"
              type="range"
              min="0"
              max="4"
              value={estadia.N}
              onChange={handleChange}
            />
            <span id="nodeCountOutput" className="output-range">{estadia.N}</span>
          </td>
        </tr>
        <tr>
          <td>Metástasis?</td>
          <td>
            <select
              className="form-select"
              name="M"
              id="M"
              value={estadia.M}
              onChange={handleChange}
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

export default EstadiaForm;
