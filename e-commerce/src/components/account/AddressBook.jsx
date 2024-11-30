function AddressBook({displayAddress}) {

  return (
    <div className={`${ displayAddress ? "flex" : "hidden"} col-span-3 border`}>AddressBook</div>
  )
}

export default AddressBook