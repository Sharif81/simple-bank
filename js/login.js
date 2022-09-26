document.getElementById('submit-btn').addEventListener('click', function () {
   const EmailFlied = document.getElementById('email');
   const userEmail = EmailFlied.value;
//   console.log(userEmail);
   
   const PasswordFlied = document.getElementById('password');
   const userPassword = PasswordFlied.value;
  // console.log(userPassword);

   if( userEmail == 'alif@gmail.com' && userPassword == '123'){
    console.log('login Successfully');

    window.location.href = "banking.html"
   }
   else {
    alert('Login failed');
   }
   
});

