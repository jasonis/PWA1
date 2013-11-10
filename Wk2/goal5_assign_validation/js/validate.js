/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){
    
    var inputName = {
        username: document.querySelector("#f_username").value,
        email: document.querySelector("#f_email").value,
        phone: document.querySelector("#f_phone").value,
        password: document.querySelector("#f_password").value,
        ssn: document.querySelector("#f_ssn").value
    };

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField(inputName.username);  //id = is the form input field ID
        validateField(inputName.email);
        validateField(inputName.phone);
        validateField(inputName.password);
        validateField(inputName.ssn);


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        if (inputName.name === 'id name goes here'){
            var pattern = 'a RegEx pattern goes here'

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.


        };

        var pass = 'the RegEx .test statement is needed here';
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



