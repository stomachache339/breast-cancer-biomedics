import { useDispatch, useSelector } from 'react-redux';
import { updateFamiliares } from '../../redux/biomedicosSlice'; 

const FamiliaresForm = () => {

    const dispatch = useDispatch();
    const familiares = useSelector((state) => state.biomedicos.familiares);

    /* guardará la información del input en el objeto biomedicos, haciendo distinción entre los tipos de input */
    const handleChange = (e) => {
        const { name, value } = e.target;
       
        dispatch(updateFamiliares({ [name]: value }));
        console.log('Estado actualizado', familiares)
      };

      
    return (
        <div className="contenidosumary">
            <table className="table">
                <tbody>
                    <tr>
                        <td>Cancer en su linea de parentesco familiar ascendente?</td>
                        <td>
                            <select 
                                className="form-select" 
                                name="ascendente" 
                                id="ascendente" 
                                defaultValue=""
                                onChange={handleChange}
                            >
                                <option value="" disabled>Selecciona una opción</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </td>
                        <td>Cancer en su linea de parentesco familiar lateral?</td>
                        <td>
                            <select 
                                className="form-select" 
                                name="lateral" 
                                id="lateral" 
                                defaultValue=""
                                onChange={handleChange}
                            >
                                <option value="" disabled>Selecciona una opción</option>
                                <option value="Si">Si</option>
                                <option value="No">No</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Cancer en su linea de parentesco familiar descendente?</td>
                        <td>
                            <select 
                                className="form-select" 
                                name="descendente" 
                                id="descendente" 
                                defaultValue=""
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
        </div>
    );
}

export default FamiliaresForm;
