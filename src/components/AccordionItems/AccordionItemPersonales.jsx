
import AccordionBody from '../AccordionBody';
import PersonalesForm from '../AccordionForms/PersonalesForm';
import { useSelector, useDispatch } from 'react-redux';
import { updateInfo } from '../../redux/biomedicosSlice';

const AccordionItemPersonales = () => {
  
  /* Se obtiene el estado de los elementos que se mostrarán en el botón al usuario si es que están completos */
  const dispatch = useDispatch();
  const personalInfoTexto = useSelector((state) => state.biomedicos.Info.personalInfo);

  /* llama la accion del slice para actualizar los datos */
  const update = () => {
    dispatch(updateInfo());
  };

  return (
    <div className="accordion-item border-bottom-0">
      <h2 className="accordion-header" id="headingOne">
        <button
          onClick={update}
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="false"
          aria-controls="collapseOne"
        >
          Antecedentes Personales
          <span className="info-text" id="personalInfo">{personalInfoTexto}</span> {/* muestra la cadena de texto generada en el slice */}
        </button>
      </h2>
      <div
        id="collapseOne"
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionParent"
      >
        <div className="accordion-body">
        {/* reenderiza el formulario correspondiente dentro del body */}
          <AccordionBody> 
            <PersonalesForm />
          </AccordionBody>
        </div>
      </div>
    </div>
  );
};

export default AccordionItemPersonales;



