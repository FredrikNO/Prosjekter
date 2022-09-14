function logginnUser() {
    for (let i = 0; i < userInfo.length; i++) {
        if ((userInfo[i].userName === userName || userInfo[i].userEmail === userEmail) && (userInfo[i].password === userPassword)) {
            showScreen = 2;
            errorCode--;
        }
    }
    makeUserErrorMessage = checkForErrors('Feil brukernavn eller passord.');
    updateView();
}
function makeNewUser() {
    const userInformation = {};
    if ((personName != null || '') && (userName != null || '') && (userEmail != null || '') && (userPassword != null || '') && (confirmingUserPassword != null || '')) {
        userInformation.name = personName;
        userInformation.userName = userName;
        if (checkEmail(userInformation)) {
            if (userPassword === confirmingUserPassword) {
                userInformation.password = userPassword;
                showScreen = 0;
                userInfo.push(userInformation);
                errorCode--;
                makeUserErrorMessage=null;
                clearFields();
            }
            else makeUserErrorMessage = checkForErrors('Passordet var ikke likt prøv igjen.');
        }
    }
    else makeUserErrorMessage = checkForErrors('Du må fylle ut alle feltene.');
    updateView();
}

function checkEmail(userInformation) {
    if (userEmail.includes('@') && userEmail.includes('.', userEmail.indexOf('@'))) {
        if (checkIfUserExist(userEmail)) {
            userInformation.userEmail = userEmail;
            return true;
        }
        else{
            makeUserErrorMessage=checkForErrors('Denne mailen finnes fra før av');
            return false
        } 
    }
    else {
        makeUserErrorMessage = checkForErrors('Du mangler enten @ eller . i mailen');
        return false;
    }
}

function clearFields() {
    personName = null;
    userName = null;
    userEmail = null;
    userPassword = null;
    confirmingUserPassword = null;
}
function changescreen() {
    showScreen = 1;
    updateView();
}
function checkForErrors(errorMessage) {
    if (errorCode == 1) {
        return errorMessage;
    }
    else {
        errorCode = 1;
        return null;
    }
}
function checkIfUserExist(userEmail) {
    for (let i = 0; i < userInfo.length; i++) {
        if (userInfo[i].userEmail == userEmail) {
            return false
        }
    }
    return true
}
function returnToLogIn(){
    showScreen=0;
    clearFields();
    updateView();
}