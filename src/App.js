import './App.css';
import Navbar1 from './components/navbar1';
import Mainbody from './components/main-body';
import withFormValidation from './hocs/withformvalidation'; //form1example
import withControlledForm from './hocs/withcontrolledform'; //form3example
import Form1 from './components/form1';
import Form2 from './components/form2'; //en desuso, es un ejemplo de formulario simple con logica junta sin customhoc
import Form3 from './components/form3';
import { useState } from "react";

//HOC form1: (hoc:withformvalidation/UI:form.jsx): Usamos el hoc(withFormValidation) para el form(Form), y lo guardamos en WithFormValidation que sera el componente que usaremos en la app.
const WithFormValidation = withFormValidation(Form1)

function App() {
  /*HOC form1: Al crear el form1, le dimos varias props, aqui seteamos a traves del nuevo componente "WithFormValidation" las props "formData"(que sera un use state de nombre y email), 
  y "onChange" que es una funcion handleChange(ver para que sirve).
  Otras props que estamos seteando al form son "error" y "validateForm" solo que lo hacemos a traves del hoc(withFormValidation).
  */
  const [formData, setFormData] = useState({nombre: "", email: ""})
  function handleChange(event){
    setFormData({
      ...formData, [event.target.name]: event.target.value
    });
  }
  //  Para el render en app seria:    <WithFormValidation formData={formData} onChange={handleChange}/>



  //-----------------------------e------------------------------------
  //form3 logic with customhoc:
  const initialStateForm3={
    name:"",
    lastname: "",
  }
  const Form3Login = withControlledForm(Form3, initialStateForm3)

  return (
    <div className="App">
      <Navbar1 tittle = 'E-COMMERCE' op1 = 'INFO+' op2 = '1'/>
      <Mainbody/>
      <Form3Login/>
    </div>
  );
}
export default App;




