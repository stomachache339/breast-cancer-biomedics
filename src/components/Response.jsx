import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Treatment = ({ treatmentData, Id }) => {
    return (
        <details>
            <summary className="text-dark fw-bold">Posible tratamiento {Id}</summary>
            <div className="contenidosumary border p-3 mt-2 bg-light rounded">
                <table className="table">
                    <tbody>
                        <tr>
                            <th scope="col">Tests recomendados: </th>
                            {treatmentData.RecommendedTests.map((test, index) => (
                                <td key={index}>
                                    <label>{test}</label>
                                </td>
                            ))}
                        </tr>
                        <tr>
                            <th scope="col">Etapa del cáncer: </th>
                            <td><label>{treatmentData.Stage}</label></td>
                        </tr>
                        <tr>
                            <th scope="col">Opciones de tratamiento: </th>
                            {treatmentData.TreatmentOptions.map((option, index) => (
                                <td key={index}>
                                    <label>{option}</label>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </details>
    );
};

Treatment.propTypes = {
    treatmentData: PropTypes.shape({
        RecommendedTests: PropTypes.arrayOf(PropTypes.string).isRequired,
        Stage: PropTypes.string.isRequired,
        TreatmentOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
    Id: PropTypes.number.isRequired,
};

const Response = ({ data }) => {
    const status = useSelector((state) => state.biomedicos.status);
    const [succeeded, setSucceeded] = useState(false);

    useEffect(() => {
        if (status === 'succeeded') {
            setSucceeded(true);
        } else if (status === 'failed') {
            setSucceeded(false);
        }
    }, [status]);

    return (
        <div id="resultados" className="container mt-4">
            {succeeded ? (
                data.map((treatment, index) => (
                    <Treatment key={index} treatmentData={treatment} Id={index + 1} />
                ))
            ) : (
                <></>
            )}
        </div>
    );
};

Response.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            RecommendedTests: PropTypes.arrayOf(PropTypes.string).isRequired,
            Stage: PropTypes.string.isRequired,
            TreatmentOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
    ).isRequired,
};

export default Response;

