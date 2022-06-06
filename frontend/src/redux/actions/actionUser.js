import clienteAxios from "../../config/clienteAxios.jsx";
import { toast } from "react-toastify";


export function registroUsuario({ nombre, email, password1 }) {
    return async function () {
      try {
        const body = {
          nombre,
          email,
          password: password1,
        };
  
        const response = await clienteAxios.post(`/usuarios`, body);
  
        toast.success(response.data);
      } catch (e) {
        toast.error(e.response.data.msg);
      }
    };
  }

  export function validateUser(id) {
    return async function (dispatch) {
      try {
        var json = await clienteAxios(`/usuarios/confirmar/${id}`);
        toast.success("User validated successfully");
        return dispatch({
          type: "VALIDATE_USER",
          payload: json.data,
        });
      } catch (error) {
        toast.error("There was an error validating the user");
        return dispatch({
          type: "VALIDATE_USER",
          payload: error.response.data,
        });
      }
    };
  }



  export function login(payload) {
    return async function (dispatch) {
      try {
        let json = await clienteAxios.post(`/usuarios/login`, payload);
        localStorage.setItem("token", json.data.token);
        return dispatch({
          type: "LOGIN_USER",
          payload: json.data,
        });
      } catch (error) {
        return dispatch({
          type: "LOGIN_USER",
          payload: { error: error.response.data.msg },
        });
      }
    };
  }

  export function resetErrorLoginUser() {
    return function (dispatch) {
      let nada = [];
      return dispatch({
        type: "RESET_ERROR_LOGUIN_USER",
        payload: nada,
      });
    };
  }

  export function autenticarUser(config) {
    return async function (dispatch) {
      try {
        let json = await clienteAxios(`/usuarios/perfil`, config);
  
        return dispatch({
          type: "AUTH_USER",
          payload: json.data,
        });
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };
  }

  export function userLogout(dispatch) {
    localStorage.clear();
    return dispatch({
      type: "LOGOUT_USER",
    });
  }