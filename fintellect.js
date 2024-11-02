
function openLoginModal(){
    $('#loginModal').modal('show');
}


function toggleLoginSignup(elem){
    const clickElement = elem.attributes["data-value"].value;

    if( clickElement == 'signup'){
        document.getElementById('signupDiv').style.display= 'flex';
        document.getElementById('loginDiv').style.display= 'none'
    }
    else if(clickElement == 'login'){
        document.getElementById('signupDiv').style.display= 'none';
        document.getElementById('loginDiv').style.display= 'flex'
    }
}