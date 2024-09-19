// !!! show the cash out form

document.getElementById("show-cashOut").addEventListener("click", function () {
  // ?? show cash out button by click

  document.getElementById("cash-out-form").classList.remove("hidden");

  document.getElementById("add-money-form").classList.add("hidden");
});

// !!! show the add money form hide the cash out form

document.getElementById("show-addMoney").addEventListener("click", function () {
  // ?? show add money button by click

  document.getElementById("add-money-form").classList.remove("hidden");

  document.getElementById("cash-out-form").classList.add("hidden");
});
