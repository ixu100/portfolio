function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function sendMail(){
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var subject = document.getElementById("subject").value.trim();
  var message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }
  if (!isValidEmail(email)){
    alert("Please enter a valid email address.");
    return;
  }

  var params = {
    name: name,
    email: email,
    subject: subject,
    message: message,
  };

  const serviceID = "service_cgxvntb";
  const templateID = "template_mthcdma";

  emailjs.send(serviceID, templateID, params)
  .then((response) =>{
    console.log("Email sent successfully", response);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
    alert("Your message has been sent successfully!");
  })
  .catch((error) => {
    console.log("Email failed to send", error);
    alert("Failed to send your message. Please try again later.");
  });
    
  }
  