function handle(event){
    event.preventDefault();
    let user=document.getElementById("user").value
    let pass=document.getElementById("pass").value
   
    if(user==""){
       alert("Please Enter your Username:");
}else if (pass==""){
        alert("please Enter your password:");
    }else{
        userDetails= {
            username:user,
            password:pass
        }
        let arrObj=localStorage.getItem("userDetails");
        if(arrObj){
           arrObj = JSON.parse(arrObj);
           console.log(arrObj);
           let correctuser= false;
           let correctpass= false;
           arrObj.map((value)=>{
            if(value.username==user){
                correctuser = true;
                if(value.password==pass){
                    correctpass = true;
                }
            }
          
        })
        if(correctuser && correctpass){
            alert("login successfull")
        }else{
            alert("enter correct user name")
        }
        
    }
        }
    }