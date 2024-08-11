import GinecoForm from "../AccordionForms/GinecoForm";
import AccordionBody from "../AccordionBody";
import { useSelector, useDispatch } from 'react-redux';
import { updateInfo } from '../../redux/biomedicosSlice';

const AccordionItemGineco = () => {

    /* Se obtiene el estado de los elementos que se mostrarán en el botón al usuario si es que están completos */
    const dispatch = useDispatch();
    const ginecoInfoTexto = useSelector((state) => state.biomedicos.Info.ginecoInfo);

    /* llama la accion del slice para actualizar los datos */
    const update = () => {
        dispatch(updateInfo());
    }

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
                <button 
                    onClick={update} 
                    className="accordion-button collapsed" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseFour" 
                    aria-expanded="false" 
                    aria-controls="collapseFour">
                    Antecedentes Ginecoobstétricos
                    <span className="info-text" id="heredofamInfo">{ginecoInfoTexto}</span> {/* muestra la cadena de texto generada en el slice */}
                </button>
            </h2>
            <div 
                id="collapseFour" 
                className="accordion-collapse collapse" 
                aria-labelledby="headingFour" 
                data-bs-parent="#accordionParent">
                <div className="accordion-body">

                {/* reenderiza el formulario correspondiente dentro del body */}
                    <AccordionBody>
                        <GinecoForm />
                    </AccordionBody>
                </div>
            </div>
        </div>
    );
}

export default AccordionItemGineco;
