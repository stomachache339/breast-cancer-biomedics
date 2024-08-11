import PropTypes from 'prop-types'

/* componente reutilizado en cada elemento del acordión */

const AccordionBody = ({children}) => { /* se dibujará cualquier formulario pasado como prop, este componente espera el formulario. */
    return (
        <div className="accordion-body">
            <div className="align-items-center input-group">
                {children} 
            </div>
        </div>
    );
}

AccordionBody.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AccordionBody;
