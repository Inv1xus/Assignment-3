function getCurrentDate(){
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October","November", "December"];
    let date = new Date();
    if (date.getSeconds()<10){
    document.querySelector("#time").innerHTML='<p class="text-primaryColor">'+days[date.getDay()]+", "+months[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()+"\n"+date.getHours()+":"+date.getMinutes()+":0"+date.getSeconds()+"</p>";}
    else{
        document.querySelector("#time").innerHTML='<p class="text-primaryColor"> <em>'+days[date.getDay()]+", "+months[date.getMonth()]+" "+date.getDate()+", "+date.getFullYear()+"\n"+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"<em></p>";}

}

setInterval(getCurrentDate,1000);


function disable(id){
    if (document.getElementById(id).disabled){
        document.getElementById(id).disabled=false;
    }
   else{ document.getElementById(id).disabled=true;}
}


document.querySelector('button[type="submit"]').addEventListener("click",(event)=>validate("petGiveAway"));
document.querySelector('button[type="submit"]').addEventListener("click",(event)=>validate("search"));


function validate(name,event){
    let form = document.forms[name];
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid= true;

   for (var i= 0; i< form.elements.length;i++){
    if(form.elements[i].tagName==='INPUT'){
        if (!form.elements[i].value.trim()) {
            alert("Incomplete form");
            valid=false;
        break;}
        else if (form.elements[i]==="email" && !pattern.test(form.elements[i].value)) {
                alert("Invalid entry");
                valid=false;
                break;
            }
    }
   }
   if(!valid){
    event.preventDefault();
}
   return valid;
}






// document.getElementById('registerForm').addEventListener('submit', function(event) {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const errorMessage = document.getElementById('error-message');

//     // Validate username
//     const usernamePattern = /^[A-Za-z0-9]+$/;
//     if (!usernamePattern.test(username)) {
//         errorMessage.textContent = 'Username can only contain letters and digits.';
//         event.preventDefault();
//         return;
//     }

//     // Validate password
//     const passwordPattern = /^[A-Za-z0-9]{4,}$/;
//     const hasLetter = /[A-Za-z]/.test(password);
//     const hasDigit = /\d/.test(password);
//     if (!passwordPattern.test(password) || !hasLetter || !hasDigit) {
//         errorMessage.textContent = 'Password must be at least 4 characters long, contain only letters and digits, and include at least one letter and one digit.';
//         event.preventDefault();
//         return;
//     }
// });



