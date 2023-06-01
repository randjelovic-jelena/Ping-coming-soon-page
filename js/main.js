'use strict'; 

/*email check*/
let validRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const email=document.querySelector('.email');
const submitBtn=document.querySelector('#submit-btn');
const inputMessage=document.querySelector('.input-message');

const reset=()=>{
   inputMessage.classList.remove('wrong');
   inputMessage.classList.remove('success');
}

const showSuccess=()=>{
   reset();
   email.value='';
   inputMessage.classList.add('success');
   inputMessage.innerText='Successfully sent!';
   setTimeout(()=>{
      inputMessage.innerText='';
   },1000);
}

const showWarning=()=>{
   reset();
   inputMessage.classList.add('wrong');
   email.classList.toggle('wrong');
   inputMessage.innerText='Please provide a valid email address!';
   setTimeout(()=>{
      email.classList.remove('wrong');
      inputMessage.innerText='';
      email.value='';
   },1000)
}

submitBtn.addEventListener('click',()=>{
   if(email.value.match(validRegex)){
      showSuccess();
   }else{
      showWarning();
   }
});
