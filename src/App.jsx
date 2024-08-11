/* import './App.css'; */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'jquery';
import './styles.scss'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { submitBiomedicos } from './redux/biomedicosSlice';
import AccordionMain from '../src/components/AccordionMain';
import Response from './components/Response';


function App() {

  /* se guardan los resultados de la peticion, el estado de la peticion y el objeto biomedicos */

  /* const results = useSelector((state) => state.biomedicos.results); */ 
  const status = useSelector((state) => state.biomedicos.status); 
  const biomedicos = useSelector((state) => state.biomedicos);
  const dispatch = useDispatch(); 

  const fetchedData = [
    {
      RecommendedTests: ['Test1', 'Test2', 'Test3'],
      Stage: 'Etapa 1',
      TreatmentOptions: ['Option1', 'Option2'],
    },
    {
      RecommendedTests: ['Test4', 'Test5'],
      Stage: 'Etapa 2',
      TreatmentOptions: ['Option3', 'Option4', 'Option5'],
    },
  ];
  
  
  /* se envía el objeto biomedicos a la api, dependiendo de la respuesta se muestra una alerta */
  function showResultados(){

    console.log(status);
    
      dispatch(submitBiomedicos(biomedicos))
        .then((action) => {
          if(submitBiomedicos.fulfilled.match(action)){
            toast.success("Request succeeded!", {
              duration: 3000,
            });
          }else if (submitBiomedicos.rejected.match(action)){
            toast.error(`Request failed: ${action.payload}`, {
              duration: 3000,
            });
          }
        }).catch((error)=> {
          toast.error(`Unexpected error: ${error.message}`, {
            duration: 3000,
          });
        });
      
    

  }
  
  return (
    <>
      <div className="bg-gradient fw-medium">  
        <div className="titulo">
          Ingrese los datos biomédicos
        </div>
        {/* se reenderiza el elemento del acordión Bootstrap, que alberga los formularios */}
        <AccordionMain />
      </div>

      {/* botón para el envio del formulario */}
      <div className='container text-center mt-4'>
        <button className='btn btn-primary btn-lg' onClick={showResultados}>Enviar</button>
      </div>

      {/* componente que muestra las respuestas de la API */}
      <Response data={fetchedData}/>
    </>
  );
}

export default App;

