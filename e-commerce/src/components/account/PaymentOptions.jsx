
function PaymentOptions({displayPayment}) {
  return (
    <div className={`${ displayPayment ? "flex" : "hidden"} col-span-3 border`}>PaymentOptions</div>
  )
}

export default PaymentOptions