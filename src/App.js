import {BrowserRouter, Routes, Route} from "react-router-dom"
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

//practica renderprops
import Container from "./components/renderpropsexample";
import { useState } from "react";

//practica de reemplazar la renderprop practicada con coostom hook usefilter
import TaskListContainer from './components/tasklistcontainer';



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
    <BrowserRouter>
      <div className="App">
        {/* empieza ecommerce */}
        <Navbar1 tittle = 'E-COMMERCE' op1 = 'INFO+' op2 = '1'/>
        <Mainbody/>
        {/* termina ecomerce */}

        {/* empieza practica forms con hoc custom hooks */}
        <div className='forms-practice-hoc-customhooks'>
            <h1 className='prev-h1'>Practica HOC para form</h1>
            <p className='prev-p'>Form 1, ejemplo con HOC que adhiere propiedades al form. Y tmb aderimos propiedades desde la app principal.</p>
            <WithFormValidation formData={formData} onChange={handleChange}/>
            <p className='prev-p'>Form 2, ejemplo en donde las propiedades estan declaradas desde el mismo componente donde esta el formulario.</p>
            <Form2/>
            <p className='prev-p'>Form 3, ejemplo con HOC donde le pasamos un componente, y un estado inicial desde la app al formulario. es dinamico por q lo puedo usar con varios forms</p>
            <Form3login/>
            <p className='prev-p'>Form 4, uso un custom hook, donde agrego las funcionalidades a los form, y en los form declaro los estados iniciales y no toco la app principal </p>
            <Form4/>
        </div>
        {/* termina practica forms con hoc custom hooks */}

        {/* empieza RENDER PROPS ejemplo: estamos creando un componente que tendra un filtro para lista de tareas. 
        y este, usara los componentes "render props" FILTER y TASK que serviran para renderizar segun la logica implicada en cada uno. TASK se encargara de pintar
        FILTER al pasasrle un children, nos añadira las funcionalidades de filtro. 
        Entonces al crear un componente container,  usamos filter, que neesita un children de parametro y lo devuelve con propiedades para filtrar.
        Este children contendra a su vez el componente renderprop TASK para pintar y asi mismo las propiedades de FILTER*/}
        <div className='renderprops'>
          <h1 className='prev-h1'>Practica con RENDER PROPS</h1>
          <Container/>       
        </div>
        
        <div className='renderprops'>
          <h1 className='prev-h1'>Practica de CUSTOM HOOK PARA REEMPLAZAR RENDER PROPS</h1>
          <TaskListContainer/>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;




