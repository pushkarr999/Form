function validate(){
    var mobile = document.getElementById('mobile');
  
    if(mobile.value.length!=10){
       
        alert('Invalid Mobile Number')
    } 
    else{
    document.myform.submit();
    }
}
