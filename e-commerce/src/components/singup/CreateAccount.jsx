import "../../Styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useForm from "../../customsHooks/useForm";


function CreateAccount() {
  const navigate = useNavigate();
  const {crearCuenta, info} = useForm({
    name: "",
    email: "",
    password: "",
  })

  const enviarDatos = () => {
    if (!info.email || !info.name || !info.password) {
      alert("debes de completar todos los campos para continuar");
      return;
    }
    axios
      .post("http://localhost:4000/crear-cliente", info)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          if (err.response.data.type) {
            if (
              err.response.data.type === "minlength" ||
              err.response.data.type === "maxlength"
            ) {
              alert(
                "La contraseña debe ser mayor a 8 caracteres y menor a 16."
              );
              return;
            }
          }
        }
        if (err.response.data === 11000) {
          alert(`El usuario ${info.email} ya existe en la base de datos`);
          return;
        }
      });
  };

  return (
    <section id="home">
      <div id="portada">
        <img src="img-login.png" alt="" className="img-login" />
      </div>
      <div id="contenedor-formulario">
        <form action="" className="formulario">
          <h2 className="titulo-formulario">Create an account</h2>
          <h3 className="texto-formulario">Enter your details below</h3>
          <input
            className="entrada-login"
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => {
              crearCuenta(e);
            }}
          />
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
          <button
            type="button"
            className="btn-create-account crear-cuenta"
            onClick={enviarDatos}
          >
            Create Account
          </button>
          <button type="button" className="btn-create-account google-cuenta">
            <img id="img-google" src="google.png" alt="" />
            Sign Up with Google
          </button>
          <p className="texto-login__footer">
            Already have account ?
            <Link to="/login" className="enlace-login">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default CreateAccount;
