import { useState, useEffect, useContext } from "react";
import AddressBook from "../components/account/AddressBook";
import AsideNav from "../components/account/AsideNav";
import FormAccount from "../components/account/FormAccount";
import PaymentOptions from "../components/account/PaymentOptions";
import NavLinks from "../components/nav/NavLinks";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ValidatorProvider } from "../context/ValidationRoute";

function Account() {
  const [displayForm, setDisplayForm] = useState(true);
  const [displayAddress, setDisplayAddress] = useState(false);
  const [displayPayment, setDisplayPayment] = useState(false);
  const { email } = useParams();
  // const [user, setUser] = useState({});
  const { user, setUser } = useContext(ValidatorProvider);
  // console.log(email);
  useEffect(() => {
    axios
      .get(`https://backend-ecommerce-six-gules.vercel.app/cliente/${email}`)
      .then((result) => {
        setUser(result.data);
        // console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="sm:grid sm:grid-cols-4 md:mx-32 gap-x-4 flex flex-col items-center sm:items-start">
      <div className="flex items-center justify-between col-span-4">
        <NavLinks route="My Account" />
        <h5>
          Welcome! <span className="text-red-500">{user.name}</span>
        </h5>
      </div>
      <AsideNav
        displayForm={setDisplayForm}
        displayAddres={setDisplayAddress}
        displayPayment={setDisplayPayment}
      />
      <FormAccount displayForm={displayForm} user={user} />
      <AddressBook displayAddress={displayAddress} />
      <PaymentOptions displayPayment={displayPayment} />
    </section>
  );
}

export default Account;
