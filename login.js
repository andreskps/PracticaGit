class Login{
    constructor(){
        this.email = document.getElementById('email');
        this.password = document.getElementById('password');
        this.loginButton = document.getElementById('loginButton');
        this.loginButton.addEventListener('click', this.login.bind(this));
    }

    login(){
        let email = this.email.value;
        let password = this.password.value;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in 
            // ...
            console.log(user);
            window.location.href = "index.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }
}