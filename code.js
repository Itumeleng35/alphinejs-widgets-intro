// a plain DOM example of creating a  counter widget using the DOM

//let counter = 0;

const myButton = document.querySelector(".btn");
const username = document.querySelector(".username");
const message = document.querySelector(".message");

//alert(myButton)
myButton.addEventListener('click', function() {

    if (username.value.length > 0) {
    //alert('Hello, ' + username.value);
    message.innerText = 'Hello, ' + username.value;

    username.value = '';
    }
    else {
        message.innerText = 'Please enter a name'
    }
});
