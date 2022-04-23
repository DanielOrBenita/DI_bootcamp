
//step 1: target the elements
const form= document.getElementById(`form`)
const username= document.getElementById(`username`)
const email= document.getElementById(`email`)
const password= document.getElementById(`password`)
const passwordvalidation= document.getElementById(`passwordvalidation`)


// step 2: add event listener

form.addEventListener(`submit`, (e)=> {
    e.preventDefault();

    checkinputs()
})

function checkinputs() {
    // we need to get the value from inputs
    
    const usernameValue= username.value.trim()
    const emailValue= email.value.trim()
    const passwordValue= password.value.trim()
    const passwordvalidationValue=passwordvalidation.value.trim()

    if(usernameValue===``){
            // show error
            setwrong(username, ` username cannot be blank`);
            // add error msg
        }
    
        else { 
        // add right class
        setright(username);
    } 


    if(emailValue===``){
        setwrong(email, ` email cannot be blank`); 

    } else {
        setright(email);
    }   

    if(passwordValue===``){
        // show error
        setwrong(password, ` password cannot be blank`);
        // add error msg
    }

    else { 
    // add right class
    setright(password);
} 

    if(passwordvalidationValue===`` ){
        // show error
        setwrong(passwordvalidation, ` password validtation cannot be blank`);
        // add error msg
    } else if(passwordvalidationValue!==passwordValue){
        setwrong(passwordvalidation, `password does not match`);
    }

    else { 
    // add right class
    setright(passwordvalidation);
    } 

 

}

    


function setwrong(input, msg){
    const formControl=input.parentElement;
    const small= formControl.querySelector(`small`)
    small.innerText= msg;
    formControl.className= `form-control wrong`
}

function setright(input){
    const formControl=input.parentElement;
    formControl.className= `form-control right`

}