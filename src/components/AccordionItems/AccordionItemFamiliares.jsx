import AccordionBody from "../AccordionBody";
import FamiliaresForm from '../AccordionForms/FamiliaresForm'
import { useSelector, useDispatch } from 'react-redux';
import { updateInfo } from '../../redux/biomedicosSlice';


const AccordionItemFamiliares = () => {

  /* se obtiene el estado de los elementos que se mostrarán en el botón al usuario si es que están completos */
  const dispatch = useDispatch();
  const familiaresInfoTexto = useSelector((state) => state.biomedicos.Info.familiaresInfo);

  /* llama la accion del slice para actualizar los datos */
  const update = () => {
    dispatch(updateInfo());
  };

    return (
        <div className= "accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button onClick={update} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Antecedentes Heredofamiliares
                    <span className="info-text" id="heredofamInfo">{familiaresInfoTexto}</span> {/* muestra la cadena de texto generada en el slice */}
                </button>
            </h2>    
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionParent">
                <div className="accordion-body">
                {/* reenderiza el formulario correspondiente dentro del body */}
                    <AccordionBody>
                        <FamiliaresForm></FamiliaresForm>
                    </AccordionBody>
                </div>
            </div>
        </div>
    );
}

export default AccordionItemFamiliares;
