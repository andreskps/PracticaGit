class Login{
    constructor(){
        this.email = document.getElementById('email');
        this.password = document.getElementById('password');
        this.loginButton = document.getElementById('button');
        this.loginButton.addEventListener('click', this.login);
    }

    login(){
        let email = this.email.value;
        let password = this.password.value;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in 
            // ...
            console.log(user);
            window.location.href = "home.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }
}