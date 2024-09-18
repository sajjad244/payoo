//! step 1 [set event handeler]
document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    //! step 2 : prevent default behavior (reloading browser)
    event.preventDefault(); //!!  bujalgbe prevent
    // console.log("login button click");
    //! step 3 [get the phone number & pin number]
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(phoneNumber, pinNumber);
    //! step 4 validate
    if (phoneNumber === "5" && pinNumber === "1234") {
      //   console.log("you are logged in");
      //! go to another file using
      window.location.href = "/home.html";
    } else {
      alert("wrong phone or pin number");
    }
  });
