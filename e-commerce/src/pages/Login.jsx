// import "../Styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../customsHooks/useForm";
import axios from "axios";
import { ValidatorProvider } from "../context/ValidationRoute";
import { useContext } from "react";
function Login() {
  const { setEmailValidation } = useContext(ValidatorProvider);
  const navigate = useNavigate();
  const { crearCuenta, info } = useForm({
    email: "",
    password: "",
  });

  const enviarDatos = (e) => {
    e.preventDefault();
    if (!info.email || !info.password) {
      alert("debes de completar todos los campos para continuar");
      return;
    }
    axios
      .post("https://backend-ecommerce-six-gules.vercel.app/login", info)
      .then(() => {
        setEmailValidation(true);
        navigate(`/account/${info.email}`);
      })
      .catch((err) => {
        console.log(err);
        alert("Usuario o Contraseña incorrectos");
      });
  };

  return (
    <section className="flex w-[100%] h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[80vh] 2xl:h-[90vh] mt-20 items-center justify-center md:gap-10">
      <div className="h-full rounded-lg hidden md:flex md:w-[50%] lg:w-[60%]">
        <img src="img-login.png" alt="" className="w-full h-full rounded-lg" />
      </div>
      <div className="w-[100%] sm:w-[80%] md:w-[50%] lg:w-[40%] flex flex-col gap-5 justify-center items-center">
        <form
          action=""
          className="w-[80%] flex flex-col gap-8 sm:w-full md:w-[90%] lg:w-[80%] sm:gap-5"
        >
          <h2 className="text-[2.3em] font-semibold tracking-wider sm:text-[1.8em] md:text-[1.8em]">
            Log in to Exclusive
          </h2>
          <h3 className="text-sm font-medium">Enter your details below</h3>
          <input
            className="border-b-2 border-gray-400 p-1 focus:outline-none"
            type="text"
            placeholder="Email"
            name="email"
            onChange={(e) => {
              crearCuenta(e);
            }}
          />
          <input
            className="border-b-2 border-gray-400 p-1 focus:outline-none"
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => {
              crearCuenta(e);
            }}
          />
          <div className="flex items-center justify-between">
            <button
              className="bg-red-600 text-gray-100 font-medium py-3 px-12 border border-transparent rounded hover:bg-black md:text-[0.8em] lg:text-[1.2em]"
              onClick={(e) => {
                enviarDatos(e);
              }}
            >
              Log In
            </button>
            <Link className="text-red-600 text-lg font-normal hover:text-black md:text-[0.8em] lg:text-[1.2em]">
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
