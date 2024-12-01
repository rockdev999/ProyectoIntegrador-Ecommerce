// import "../../Styles/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import useForm from "../../customsHooks/useForm";

function CreateAccount() {
  const navigate = useNavigate();
  const { crearCuenta, info } = useForm({
    name: "",
    email: "",
    password: "",
  });

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
    <section className="flex items-center justify-center w-full h-[64vh] pt-24 sm:h-[60vh] sm:pt-24 md:h-[70vh] lg:h-[90vh] xl:h-[90%] items-center">
      <div className="rounded-lg hidden md:flex md:w-[60%] xl:w-[70%]">
        <img src="img-login.png" alt="" className="w-full h-full rounded-lg" />
      </div>
      <div className="w-[100%] sm:w-[80%] md:w-[40%] flex flex-col gap-5 justify-center items-center">
        <form action="" className="flex flex-col gap-8 w-[80%] sm:gap-5">
          <h2 className="text-[2.3em] font-semibold tracking-wider">
            Create an account
          </h2>
          <h3 className="text-sm font-medium">Enter your details below</h3>
          <input
            className="border-b-2 border-gray-400 p-1 focus:outline-none"
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => {
              crearCuenta(e);
            }}
          />
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
          <button
            type="button"
            className="py-4 sm:py-2 bg-red-500 text-white text-sm font-medium rounded hover:bg-black"
            onClick={enviarDatos}
          >
            Create Account
          </button>
          <button
            type="button"
            className="py-4 sm:py-2  flex items-center justify-center border-2 border-gray-300 rounded hover:bg-gray-500 hover:text-white"
          >
            <img className="w-8 h-8 p-1" src="google.png" alt="" />
            Sign Up with Google
          </button>
          <p className="flex justify-center gap-2.5">
            Already have account ?
            <Link
              to="/login"
              className="border-b border-black no-underline font-medium hover:border-transparent"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default CreateAccount;
