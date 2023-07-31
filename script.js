//let mail=document.getElementById("floatingInput");
//console.log(mail);

// const login_btn=document.getElementById("btn-login");
// login_btn.addEventListener('click',chechlogin);

//  function chechlogin(){
//     const mail=document.getElementById("floatingInput").value;
//     console.log(mail);
// }
let loginReturnValue=false;
let returnval=true;
let signEmail="3";
let signPassword="4";
let loginEmail="1";
let loginPassword="2";

let i=0,j=0,k=0;
function clearError(){
    let errors=document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML="";
    }
}

function seterror(id,error){
    let element;
    element= document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;
}

function validateForm(){
    
    clearError();
    let name=document.forms['myForm']['fname'].value;
    
    
    if(name.length<5)
    {
        seterror("name","length or name is too short");
        returnval=false;
    }

    let email=document.forms['myForm']['femail'].value;
    signEmail=email;
    if(email.length>15)
    {
        seterror("email","length of email is too long");
        returnval=false;
    }

    let phone=document.forms['myForm']['fphone'].value;
    
    if(phone.length!=10)
    {
        seterror("phone","phone number is not correct");
        returnval=false;
    }

    let password=document.forms['myForm']['fpass'].value;
    signPassword=password;
    
    if(password.length<6)
    {
        seterror("pass","length of password is too short");
        returnval=false;
    }

    for(let item of password)
    {
        if(item >= 0 && item<=9)
        {
            i++;
        }
        else if((item >= 'a' && item<='z' )|| (item >= 'A' && item<='Z' ))
        {
            j++;
        }
        else
        {
            k++;
        }
    }
    if(i==0 || k==0 || j==0)
    {
        seterror("pass","password is not strong");
        returnval=false;
    }
    // let cpassword=document.forms['myForm']['fcpass'].value;
    
    // if(cpassword!=password)
    // {
    //     seterror("cpass","password does not match");
    //     returnval=false;
    // }


    return returnval;
}

function formReset()
{
    document.getElementById('reset').click();
}

function loginValidation(){
    loginEmail=document.getElementById('login-email').value;
    loginPassword=document.getElementById('login-password').value;
    if((loginEmail==signEmail) && (loginPassword==signPassword))
    {
        loginReturnValue=true;
    }
    else
    {
       loginReturnValue=false; 
       document.getElementById("error-lpassword").innerHTML="password or email not right";
    }
    return loginReturnValue;
}

function justcheck(){
    console.log(signEmail);
    console.log(signPassword);
}
console.log(signEmail);
console.log(signPassword);