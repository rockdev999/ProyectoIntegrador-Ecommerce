import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ValidatorProvider } from "../../context/ValidationRoute";

function Navbar() {
  const navigate = useNavigate();
  const [contract, setContract] = useState(false);
  const { emailValidation, setEmailValidation, user } =
    useContext(ValidatorProvider);

  const navigation = () => {
    navigate("/");
  };

  const toggleContract = () => {
    if (!contract) {
      setContract(true);
    } else {
      setContract(false);
    }
  };

  return (
    <nav className="grid border-b-2 pb-4 ">
      <div className="bg-black grid grid-cols-1 px-2 pt-4 pb-1 lg:px-32 lg:py-4 md:grid-cols-2 lg:grid-cols-3 fixed z-50 w-full">
        <div className="grid col-span-1 items-center justify-center lg:flex lg:justify-end md:col-span-1 lg:col-span-2">
          <div className="grid text-white text-xs col-span-1 lg:col-span-2 lg:justify-end lg:text-base">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </div>
          <div className="flex justify-center text-xs lg:text-sm text-white pl-3 lg:justify-end  ">
            <Link className="font-bold border-b w-auto">ShopNow</Link>
          </div>
        </div>
        <div className="flex text-white text-xs items-center justify-end lg:text-base">
          English
          <span className="lg:pt-1 material-symbols-outlined cursor-pointer">
            keyboard_arrow_down
          </span>
        </div>
      </div>

      <div
        className={`flex lg:hidden w-full flex-end  justify-between px-4 pt-4 mt-20 `}
      >
        <Link to="/" className="font-bold text-lg">
          Exclusive
        </Link>
        <button
          className="material-symbols-outlined w-max"
          onClick={toggleContract}
        >
          menu
        </button>
      </div>

      <div className={`${contract ? "hidden" : "grid"}  gap-2 lg:hidden pt-4 `}>
        <ul className="grid grid-cols-4">
          <li className="flex justify-center">
            <Link
              to="/"
              className="border-b-2 border-transparent hover:border-b-2 hover:border-slate-400 text-sm "
            >
              Home
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              to="/contact"
              className="border-b-2 border-transparent hover:border-b-2 hover:border-slate-400 text-sm"
            >
              Contact
            </Link>
          </li>
          <li className="flex justify-center">
            <Link
              to="/about"
              className="border-b-2 border-transparent hover:border-b-2 hover:border-slate-400 text-sm"
            >
              About
            </Link>
          </li>
          <li className="flex justify-center w-[75px] flex-col">
            {emailValidation ? (
              <div className="flex gap-2 justify-center">
                <Link
                  to={`/account/${user.email}`}
                  className="hover:border-b-2 hover:border-slate-400"
                >
                  Profile
                </Link>
                <button
                  className="bg-red-600 text-gray-100 font-light py-0 px-6 border border-transparent rounded hover:bg-black"
                  onClick={(e) => {
                    setEmailValidation(false);
                  }}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/create-account"
                  className="border-b-2 text-center border-transparent hover:border-b-2 hover:border-slate-400 text-sm"
                >
                  Sing In
                </Link>
                <Link
                  to="/login"
                  className="border-b-2 text-center border-transparent hover:border-b-2 hover:border-slate-400 text-sm"
                >
                  Sing Up
                </Link>
              </>
            )}
          </li>
        </ul>
        <ul className="grid grid-cols-3">
          <li className="flex justify-center">
            <Link className="material-symbols-outlined"> search</Link>
          </li>
          <li className=" flex justify-center">
            <Link className="text-sm cursor-pointer">♡</Link>
          </li>
          <li className=" flex justify-center">
            <Link
              to="/carrito"
              className="material-symbols-outlined cursor-pointer"
            >
              shopping_cart
            </Link>
          </li>
        </ul>
      </div>

      <div className={`hidden lg:grid lg:grid-cols-5 mt-20 mx-32`}>
        <button
          className="flex w-32 items-center justify-center  p-1"
          onClick={navigation}
        >
          <h1 className="grid font-bold text-2xl items-center">Exclusive</h1>
        </button>
        <ul
          id="list"
          className="grid grid-cols-5  col-span-3 items-center pt-2"
        >
          <li className="col-span-1 font-medium">
            <Link className="hover:border-b-2 hover:border-slate-400 " to="/">
              Home
            </Link>
          </li>
          <li className="col-span-1 font-medium">
            <Link
              to={"/contact"}
              className="hover:border-b-2 hover:border-slate-400 "
            >
              Contact
            </Link>
          </li>
          <li className="col-span-1 font-medium">
            <Link
              to={"/about"}
              className="hover:border-b-2 hover:border-slate-400 "
            >
              About
            </Link>
          </li>
          <li className=" flex gap-2 col-span-1 font-medium">
            {emailValidation ? (
              <div className="flex gap-6">
                <Link
                  to={`/account/${user.email}`}
                  className="hover:border-b-2 hover:border-slate-400"
                >
                  Profile
                </Link>
                <button
                  className="bg-red-600 text-gray-100 font-medium px-4 border border-transparent rounded hover:bg-black"
                  onClick={(e) => {
                    setEmailValidation(false);
                  }}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <>
                <Link
                  className="border-b-2 border-transparent hover:border-b-2 hover:border-slate-400"
                  to="create-account"
                >
                  Sing Up
                </Link>
                <div>/</div>
                <Link
                  className="border-b-2 border-transparent  hover:border-b-2 hover:border-slate-400"
                  to="login"
                >
                  Sing In
                </Link>
              </>
            )}
          </li>
        </ul>
        <div className="flex  justify-between">
          <label
            htmlFor="search"
            className="flex justify-between w-3/4 px-4 items-center bg-gray-200 rounded cursor-pointer"
          >
            <input
              id="search"
              className="bg-transparent text-xs w-4/5 focus:outline-none"
              type="text"
              placeholder="What are you looking for?"
            />
            <button className="flex items-center active:bg-black active:text-white rounded">
              <span className="material-symbols-outlined">search</span>
            </button>
          </label>
          <div className="flex items-center  pl-6  gap-4">
            <Link>
              <span className="text-3xl cursor-pointer">♡</span>
            </Link>
            <Link to={"/carrito"} className="flex items-center">
              <span className="material-symbols-outlined cursor-pointer">
                shopping_cart
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
