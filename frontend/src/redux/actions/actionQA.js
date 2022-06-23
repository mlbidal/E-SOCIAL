import clienteAxios from "../../config/clienteAxios";
import { GET_QA, GET_ALL_QUESTIONS } from '../utils/constants';

export const postQuestion = (payload) => {
    return async function (dispatch) {
        const id = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${id}`,
            },
        }
        try {
           const json = await clienteAxios.post(`/qa/question/${payload.idComprador}`, payload, config);
            console.log("a ver qué trae el jsoonnn ",json)
            return json.data;
        } catch (error) {
            // console.log(error)
            throw error
        }
    }
}

export const postAnswer = (payload) => {
    return async function (dispatch) {
        const id = localStorage.getItem("token");
        const config = {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${id}`,
            },
        }
        try {
            const json = await clienteAxios.post(`/qa/answer/${payload.idVendedor}`, payload, config);
            return json.data;
        } catch (error) {
            throw error
        }
    }
}

export const getQA = (id) => {
    try {
        return async function(dispatch){
        const QA = await clienteAxios.get(`/qa/${id}`)
      return dispatch({
        type: GET_QA,
        payload: QA
      }) 
    }
    } catch (error) {
        console.log(error)
    }
}

export const allQuestions = (payload) => {
  return async function (dispatch) {
    const id = localStorage.getItem("token");
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${id}`,
      },
    };
    try {
      const json = await clienteAxios.get(`/qa/questions/${payload}`, config);
      // console.log(json);
      return dispatch({
        type: GET_ALL_QUESTIONS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};