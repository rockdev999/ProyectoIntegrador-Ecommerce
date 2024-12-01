import { useNavigate } from "react-router-dom";
import { ValidatorProvider } from "../../context/ValidationRoute";
import { useContext, useEffect } from "react";

function AsideNav({ displayForm, displayAddres, displayPayment }) {
  const { emailValidation } = useContext(ValidatorProvider);
  const navigate = useNavigate();

  useEffect(() => {
    if (!emailValidation) {
      navigate("/");
    }
  }, [emailValidation]);

  const changeDisplay = (event) => {
    if (event.target.id === "profile") {
      displayForm(true);
      displayPayment(false);
      displayAddres(false);
    } else if (event.target.id === "address") {
      displayForm(false);
      displayAddres(true);
      displayPayment(false);
    } else {
      displayForm(false);
      displayAddres(false);
      displayPayment(true);
    }
  };
  return (
    <div className="flex flex-col gap-4 hidden sm:flex">
      <div>
        <h6 className="font-bold text-lg cursor-pointer border-b w-fit border-transparent hover:border-black ">
          Manage My Account
        </h6>
        <ul className="flex flex-col gap-2 ml-8 mt-4 ">
          <li className="w-fit">
            <button
              className="text-slate-400 focus:text-red-500 font-medium"
              id="profile"
              onClick={(e) => {
                changeDisplay(e);
              }}
            >
              My Profile
            </button>
          </li>
          <li className="w-fit">
            <button
              className="text-slate-400 focus:text-red-500 font-medium"
              id="address"
              onClick={(e) => {
                changeDisplay(e);
              }}
            >
              Address Book
            </button>
          </li>
          <li className="w-fit">
            <button
              className="text-slate-400 focus:text-red-500 font-medium"
              id="payment"
              onClick={(e) => {
                changeDisplay(e);
              }}
            >
              My Payment Options
            </button>
          </li>
        </ul>
      </div>
      <div>
        <h6 className="font-bold text-lg cursor-pointer border-b w-fit border-transparent hover:border-black">
          My Orders
        </h6>
        <ul className="flex flex-col gap-2 ml-8 mt-4 ">
          <li className="w-fit">
            <button className="text-slate-400 focus:text-red-500 font-medium">
              My Returns
            </button>
          </li>
          <li className="w-fit">
            <button className="text-slate-400 focus:text-red-500 font-medium">
              My Cancellations
            </button>
          </li>
        </ul>
      </div>
      <h6 className="font-bold text-lg cursor-pointer border-b w-fit border-transparent hover:border-black">
        My WishList
      </h6>
    </div>
  );
}

export default AsideNav;
