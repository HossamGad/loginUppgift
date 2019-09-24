

const userName = "test";
const passWord = "1234";

var user = document.getElementById("username");
var pass = document.getElementById("password");
var loggaIn = document.getElementById("loginBtn");


loggaIn.onclick = function()
{

var user1 = document.getElementById("username").value;

var pass1 = document.getElementById("password").value;
// Om det var rätt username och password

	if(user1 === userName && pass1 === passWord)
	{

      localStorage.setItem("inloggad", "true");
      location.reload(); // Här sparas username och password
                      
    }

	else
	{
           // Här rensas skärman
    user.style.visibility = "hidden";
	  pass.style.visibility = "hidden";  
	  //loggaIn.style.visibility = "hidden";

    var fel = document.createElement("p"); // Här kommer felmeddelande
    fel.innerHTML = window.alert("Fel användarnamn eller lösenord!!");
    location.reload(); 
	  

    }

  };

loggain();

function loggain()
{

var inloggad = localStorage.getItem("inloggad")

if(inloggad === "true")
 {

    // Här rensas skärman
    user.style.visibility = "hidden";
	  pass.style.visibility = "hidden";  
	  loggaIn.style.visibility = "hidden";

    var rätt = document.createElement("p");
    rätt.innerHTML = "Welcome"; 
    document.body.appendChild(rätt);


    var logout = document.createElement("button"); // Skapar en knapp med variabel loggaUt
    logout.innerHTML = "logga ut"; 
    document.body.appendChild(logout);
  
    //Rensa och ladda om localstorage.

    logout.onclick = function(){

    localStorage.clear(); // rensar local storage

    location.reload(); // laddar om sidan till logga in-sidan igen.

  }    

}

};



