function sendMail(){
  var params = {
    name: document.getElementById("name").value ,
    email: document.getElementById('email').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
  };

  const serviceID = "service_cgxvntb";
  const templateID = "template_mthcdma";

  if (params.name && params.email && params.subject && params.message){
    emailjs.send(serviceID,templateID,params)
    .then((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully");
      })
      .catch((error) => {
        console.log("Failed",error);
        alert("Failed",error);
      })
  } else{
    console.log("Email failed to send", error);
  }
  
}

