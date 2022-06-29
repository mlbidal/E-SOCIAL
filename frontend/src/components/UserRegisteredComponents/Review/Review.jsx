import React, { useEffect, useState } from 'react'
import NavBar from '../../CommonComponents/NavBar/NavBar'
import { useDispatch, useSelector } from 'react-redux'
import { getDetalleOrder, review } from '../../../redux/actions/actionOrder'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Footer from '../../CommonComponents/Footer/Footer'
import s from './Review.module.css'
import swal from 'sweetalert';

const Review = ({id, closeModal}) => {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const detalles = useSelector(state => state.order)
  const vendedor = detalles.books?.creador
  const orderId = detalles._id

  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    title: "",
    vendedor: vendedor,
    description: "",
    score: "",
    orden: orderId
  })
  useEffect(() => {
    dispatch(getDetalleOrder(id));
  }, [])

  function validate(input){
    let errors = {};

    if(!input.title){
      errors.title = "Debe haber un titulo"
    }
    if(!input.description){
      errors.description = "Debe haber una descripción"
    }

    if(!input.score){
      errors.score= "Debes colocar un puntaje"
    } else if(input.score > 5 || input.score <= 1 ){
      errors.score = "El puntaje debe estar comprendido entre 1 y 5"
    }

    return errors
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validate({
      ...input, 
      [e.target.name]: e.target.value
    }))
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(input.description && input.score && input.title){
      console.log("acá están todos los inputs", input)
      if(input.score > 5 || input.score <= 1){
        swal({
          title: "El score debe ser entre 1 y 5!",
        });

      } else {
        dispatch(review(input))
        alert("ok")
        setInput({
          title: "",
          vendedor: "",
          description: "",
          score: "",
          orden: ""
        })
        Navigate("/")
      }
    }else{
    swal({
      title: "Faltan campos por completar",
    });
     
    }
  }

  return (
    <>
    <div>
    <button onClick={closeModal}  >X</button>

  <div class="bg-white p-10 rounded-lg shadow md:w-3/4 lg:w-1/2 mx-auto">

    <form action="" class="" onSubmit={(e)=>handleSubmit(e)}>

      <div class="mb-5">
        <label htmlFor="" class="block mb-2 font-bold text-gray-700 text-3xl">Título</label>
        <input 
           type="text"
           name="title"
           value={input.title}
           onChange={(e) => handleChange(e)}
        placeholder="Escribi el título" 
        class="text-2xl border border-gray-300 shadow p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-300"
        />
      </div>

      <div class="mb-5">
        <label htmlFor="" class="block mb-2 font-bold text-gray-700 text-3xl">Descripción</label>
        <input 
        type="text"
        name="description"
        value={input.description}
        onChange={(e) => handleChange(e)} 
        placeholder="..." 
        class="text-4xl border border-red-300 shadow p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-300"
        />
        <p class=" text-red-400 mt-2 text-xl">Descripción name is required</p>  
      </div>
      <div class="mb-10">
        <label htmlFor="" class="block mb-2 font-bold text-gray-700 text-3xl">score</label>
        <input type="number"
            name="score"
            value={input.score}
            onChange={(e) => handleChange(e)} 
        class="border border-red-300 shadow p-3 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition duration-300"
        />
      
        <p class="text-xl text-red-400 mt-2">Score name is required</p>  
      </div>
      
      <button type="submit" class="bg-blue-300 hover:bg-blue-400 w-full p-3 shadow-md font-bold text-3xl text-white rounded-lg transition duration-300">Submit</button>

    </form>

  </div>
</div>

    </>
  )
}

export default Review
