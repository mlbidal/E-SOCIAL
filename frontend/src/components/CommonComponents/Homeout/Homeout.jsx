import React, { useEffect } from "react"
import { useNavigate } from "react-router"
import Login from "./Register"
import Register from "./Login"


export default function Homeout() {
 const navigate = useNavigate()
 const token = localStorage.getItem("token")

 useEffect(() => {

  token ? navigate("/") : null

}, [token])

 
  function click() {
    (document?.getElementById('containerHomeout')).classList.add("right-panel-active");
  };

  function clickk() {
    ( document?.getElementById('containerHomeout')).classList.remove("right-panel-active");
  };

  return (
    <div class="padre">
      <div>
        <div className="containerHomeout" id="containerHomeout" >
          <div class="form-container sign-up-container">
            <Login/>
            </div> 
          <div class="form-container sign-in-container">
            <Register/>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Hola nuevamente!</h1>
                <p>Para volver a iniciar sesion ingrese su informacion personal</p>
                <button class="btnLoginRegister" onClick={e=>clickk(e)} id="signIn">Ingresar</button>
                           
                </div>
              <div class="overlay-panel overlay-right">
                <h1>Hola le damos la bienvenida!</h1>
                <p>Ingrese sus datos personales y comience a comprar libros unicos</p>
                <button class="btnLoginRegister" onClick={e=>click(e)} id="signUp">Registrarse</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  )
}