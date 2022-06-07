import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setToResetPassword, setStateEmail } from "../../redux/actions/actionUser";
import validarEmail from "../../middleware/validarEmail";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const respuesta = useSelector((state) => state.email);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(setStateEmail());
    };
  }, []);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (validarEmail(e.target.value)) {
      e.target.value.length > 40
        ? setErrors({
            email: "Largo invalido",
          })
        : setErrors({
            email: "Email invalido",
          });
    } else {
      setErrors({
        email: "",
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "") {
      setErrors({
        email: "Esto es requerido",
      });
    } else {
      dispatch(setToResetPassword(email));
      setEmail("");
    }
  };

  return (
    <div>
      <div>
        <div>
          <h3>Ingrese su correo electrónico para recuperar su contraseña</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input
              name="email"
              value={email}
              onChange={handleChange}
              id="email"
              type="email"
              placeholder="Reset email"
            />
            {errors.email && (
              <div>
                <p>{errors.email}</p>
              </div>
            )}
            {respuesta.msg ? (
              <Link to="/">
                {" "}
                <button type="submit">Go back</button>{" "}
              </Link>
            ) : (
              <button type="submit">Reset password</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}