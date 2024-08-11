import AccordionBody from "../AccordionBody";
import EstadiaForm from '../AccordionForms/EstadiaForm'
import { useSelector, useDispatch } from 'react-redux';
import { updateInfo } from '../../redux/biomedicosSlice';



const AccordionItemEstadia = () => {
    /* Se obtiene el estado de los elementos que se mostrarán en el botón al usuario si es que están completos */
    const dispatch = useDispatch();
    const estadiaInfoTexto = useSelector((state) => state.biomedicos.Info.estadiaInfo);

    /* llama la accion del slice para actualizar los datos */
    const update = () => {
        dispatch(updateInfo());
    }

    return (
        <div className= "accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button onClick={update} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Estadía Tumoral
                    <span className="info-text" id="heredofamInfo">{estadiaInfoTexto}</span>{/* muestra la cadena de texto generada en el slice */}
                </button>
            </h2>    
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionParent">
                <div className="accordion-body">

                {/* reenderiza el formulario correspondiente dentro del body */}
                    <AccordionBody>
                        <EstadiaForm></EstadiaForm>
                    </AccordionBody>
                </div>
            </div>
        </div>
    );
}

export default AccordionItemEstadia;