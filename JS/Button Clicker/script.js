/* switch between login and logout */
function login(element) { 
    if(element.innerText == "Login") {
        element.innerText = "Logout";
    } 
    else {
        element.innerText = "Login";
    }
}

/* alert when pushing the like button */
function message() { 
    alert("Ninja was liked");
}


/* removes the button when clicked */
function hide_bouton(element) { 
    element.remove();
}