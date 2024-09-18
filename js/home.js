//!add money to the account

// ! add an event handler to the add money button inside the form

document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    // prevent page reload before page reload
    event.preventDefault();

    //! stp2 - get money to be added to the account
    const addMoneyInput = document.getElementById("input-add-money").value;

    // get the pin number
    const addPinNumber = document.getElementById("input-pin-number").value;

    // console.log(addMoneyInput, addPinNumber);
    //!stp3 verify the pin number

    if (addPinNumber === "1234") {
      //! stp4 current balance
      const balance = document.getElementById("account-balance").innerText;
      //! stp5 add money with balance
      const addMoneyNumber = parseFloat(addMoneyInput);
      const balanceNumber = parseFloat(balance);
      const newBalance = addMoneyNumber + balanceNumber;
      //   console.log(newBalance);
      //! stp6 add money with balance in ui/dom

      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("failed to add money ! please try again");
    }
  });
