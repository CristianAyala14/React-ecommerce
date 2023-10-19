import './App.css';
import Navbar1 from './components/navbar1';
import Mainbody from './components/main-body';
import withFormValidation from './hocs/withformvalidation'; //form1example
import withControlledForm from './hocs/withcontrolledform'; //form3example
//practicando hoc, custom hoc con forms.
import Form1 from './components/form1';
import Form2 from './components/form2'; 
import Form3 from './components/form3';
import Form4 from './components/form4';

import { useState } from "react";



function App() {
  //HOC form1: (hoc:withformvalidation/UI:form.jsx): Usamos el hoc(withFormValidation) para el form(Form), y lo guardamos en WithFormValidation que sera el componente que usaremos en la app.
  const WithFormValidation = withFormValidation(Form1)
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
  //-----------------------------------------------------------------
  //form3 
  const initialStateForm3={
    name:"",
    lastname: "",
  }
  const Form3login = withControlledForm(Form3, initialStateForm3)
  //------------------------------------------------------------------------
  return (
    <div className="App">
      <Navbar1 tittle = 'E-COMMERCE' op1 = 'INFO+' op2 = '1'/>
      <Mainbody/>

      <div className='forms-practice-hoc-customhooks'>
          <h1 className='prev-h1'>Practica con forms/HOC/CUSTOM HOOKS</h1>
          <p className='prev-p'>Form 1, ejemplo con HOC que adhiere propiedades al form. Y tmb aderimos propiedades desde la app principal.</p>
          <WithFormValidation formData={formData} onChange={handleChange}/>
          <p className='prev-p'>Form 2, ejemplo en donde las propiedades estan declaradas desde el mismo componente donde esta el formulario.</p>
          <Form2/>
          <p className='prev-p'>Form 3, ejemplo con HOC donde le pasamos un componente, y un estado inicial desde la app al formulario. es dinamico por q lo puedo usar con varios forms</p>
          <Form3login/>
          <p className='prev-p'>Form 4, uso un custom hook, donde agrego las funcionalidades a los form, y en los form declaro los estados iniciales y no toco la app principal </p>
          <Form4/>
      </div>
      


      

    </div>
  );
}
export default App;




