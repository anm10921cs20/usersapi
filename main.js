const firebaseConfig = {
  apiKey: "AIzaSyAm--sfbEonD49xNHSWPWoeMbkwFXXqF4U",
  authDomain: "mahan-food-app.firebaseapp.com",
  databaseURL: "https://mahan-food-app-default-rtdb.firebaseio.com",
  projectId: "mahan-food-app",
  storageBucket: "mahan-food-app.firebasestorage.app",
  messagingSenderId: "33097873868",
  appId: "1:33097873868:web:a34866029150b96d274569",
  measurementId: "G-V1EX1JKP7S"
};

firebase.initializeApp(firebaseConfig);

// Load Recaptcha only when page loads
window.onload = function () {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible"
    }
  );
};

function sendOTP() {
  const phone = document.getElementById("phone").value;
  const appVerifier = window.recaptchaVerifier;

  firebase.auth().signInWithPhoneNumber(phone, appVerifier)
    .then(confirmationResult => {
      window.confirmationResult = confirmationResult;
      alert("OTP sent!");
    })
    .catch(err => {
      console.error(err);
      alert(err.message);
    });
}

function verifyOTP() {
  const code = document.getElementById("otp").value;

  window.confirmationResult.confirm(code)
    .then(result => {
      alert("Login success!");
      console.log(result.user);
    })
    .catch(err => {
      console.error(err);
      alert("Incorrect OTP");
    });
}
