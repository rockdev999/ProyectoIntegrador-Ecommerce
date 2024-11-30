import { useState } from "react";
import AddressBook from "../components/account/AddressBook";
import AsideNav from "../components/account/AsideNav";
import FormAccount from "../components/account/FormAccount";
import PaymentOptions from "../components/account/PaymentOptions";
import NavLinks from "../components/nav/NavLinks";

function Account() {
  const [displayForm, setDisplayForm] = useState(true);
  const [displayAddress, setDisplayAddress] = useState(false);
  const [displayPayment, setDisplayPayment] = useState(false);

  return (
    <section className="grid grid-cols-4 mx-32 gap-x-4">
      <div className="flex items-center justify-between col-span-4">
        <NavLinks route="My Account" />
        <h5>
          Welcome! <span className="text-red-500">Md Rimel</span>
        </h5>
      </div>
      <AsideNav
        displayForm={setDisplayForm}
        displayAddres={setDisplayAddress}
        displayPayment={setDisplayPayment}
      />
      <FormAccount displayForm={displayForm} />
      <AddressBook displayAddress={displayAddress} />
      <PaymentOptions displayPayment={displayPayment} />
    </section>
  );
}

export default Account;
