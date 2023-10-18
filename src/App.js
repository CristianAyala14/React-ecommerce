import './App.css';
import Navbar1 from './components/navbar1';
import Mainbody from './components/main-body';

import withFormValidation from './hooks/withformvalidation';
import Form from './components/form';
import { useState } from "react";

//HOC 1: Usamos el hoc(withFormValidation) para el form(Form), y lo guardamos en WithFormValidation que sera el componente que usaremos en la app.
const WithFormValidation = withFormValidation(Form)

function App() {
  /*HOC 2: Al crear el form, le dimos varias props, aqui seteamos a traves del nuevo componente "WithFormValidation" las props "formData"(que sera un use state de nombre y email), 
  y "onChange" que es una funcion handleChange(ver para que sirve).
  Otras props que estamos seteando al form son "error" y "validateForm" solo que lo hacemos a traves del hoc(withFormValidation).
  */
  const [formData, setFormData] = useState({nombre: "", email: ""})
  function handleChange(event){
    setFormData({
      ...formData, [event.target.name]: event.target.value
    });
  }
  //-----------------------------------------------------------------
  return (
    <div className="App">
      <Navbar1 tittle = 'E-COMMERCE' op1 = 'INFO+' op2 = '1'/>
      <Mainbody/>
      <WithFormValidation formData={formData} onChange={handleChange}/>
    </div>
  );
}
export default App;




