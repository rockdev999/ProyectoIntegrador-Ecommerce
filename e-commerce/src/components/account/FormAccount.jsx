function FormAccount({ displayForm }) {
  return (
    <div className={`${displayForm ? "flex" : "hidden"} col-span-3 border`}>
      <form action="">
        <div className="grupo-firstName">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            placeholder="Md"
          />
        </div>

        <div className="grupo-lastName">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            placeholder="Rimel"
          />
        </div>
        <div className="grupo-email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="rimel1111@gmail.com"
          />
        </div>

        <div className="grupo-address">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Kingston, 5236, United State"
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
          <input
            type="password"
            placeholder="New Passwod"
          />
          <input
            type="password"
            name="passwordChanges"
            placeholder="Confirm New Passwod"
          />
        </div>
        <div>
          <button type="reset">Cancel</button>
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </div>
  );
}

export default FormAccount;
