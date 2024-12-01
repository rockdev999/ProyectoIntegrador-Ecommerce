function FormAccount({ displayForm, user }) {
  // console.log(user);
  return (
    <div className={`${displayForm ? "flex" : "hidden"} col-span-3 border`}>
      <form action="" className="md:w-full flex flex-col">
        <div className="grupo-firstName flex gap-3 w-full">
          <label htmlFor="first-name">First Name</label>
          <input
            className="w-[80%]"
            type="text"
            id="first-name"
            name="first-name"
            placeholder={user.name}
          />
        </div>

        <div className="grupo-email flex gap-3">
          <label htmlFor="email">Email</label>
          <input
            className="w-[80%]"
            type="email"
            id="email"
            name="email"
            placeholder={user.email}
          />
        </div>

        {/* <div className="grupo-address">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder=
          />
        </div>
        <div className="grupo-passwordChanges">
          <label htmlFor="passwordChanges">Password Changes</label>
          <input
            type="password"
            id="passwordChanges"
            name="passwordChanges"
            placeholder="Current Passwod"
          />
          <input type="password" placeholder="New Passwod" />
          <input
            type="password"
            name="passwordChanges"
            placeholder="Confirm New Passwod"
          />
        </div>
        <div>
          <button type="reset">Cancel</button>
          <button type="submit">Save Changes</button>
        </div> */}
      </form>
    </div>
  );
}

export default FormAccount;
