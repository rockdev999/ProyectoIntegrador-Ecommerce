import "../Styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../customsHooks/useForm";
import axios from "axios";
import { ValidatorProvider } from "../context/ValidationRoute";
import { useContext } from "react";
function Login() {
  const { setEmailValidation} = useContext(ValidatorProvider)
  const navigate = useNavigate();
  const { crearCuenta, info } = useForm({
    email: "",
    password: "",
  });

  const enviarDatos = (e) => {
    e.preventDefault()
    if (!info.email || !info.password) {
      alert("debes de completar todos los campos para continuar");
      return;
    }
      axios
      .post("http://localhost:4000/login", info)
      .then(() => {
        setEmailValidation(true)
        navigate("/account");
      })
      .catch((err) => {
        console.log(err);
      });
    
  };

  return (
    <div className="login">
      <section id="home">
        <div id="portada">
          <img src="img-login.png" alt="" className="img-login" />
        </div>
        <div id="contenedor-formulario">
          <form action="" className="formulario">
            <h2 className="titulo-formulario">Log in to Exclusive</h2>
            <h3 className="texto-formulario">Enter your details below</h3>
            <input
              className="entrada-login"
              type="text"
              placeholder="Email"
              name="email"
              onChange={(e) => {
                crearCuenta(e);
              }}
            />
            <input
              className="entrada-login"
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => {
                crearCuenta(e);
              }}
            />
            <div className="login-btns">
              <button className="btn-login" onClick={(e)=>{enviarDatos(e)}}>Log In</button>
              <Link className="forget-password">Forget Password?</Link>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
