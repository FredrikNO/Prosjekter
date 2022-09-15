// Sjekker om brukeren eksisterer og om passordet stemmer.
function logginnUser() {
    for (let i = 0; i < userInfo.length; i++) {
        if ((userInfo[i].userName === userName || userInfo[i].userEmail === userName) && (userInfo[i].password === userPassword)) {
            showScreen = 2;
            errorCode--;
        }
    }
    makeUserErrorMessage = checkForErrors('Feil brukernavn eller passord.');
    updateView();
}
// Lager ny bruker.
function makeNewUser() {
    const userInformation = {};
    if ((personName != null || '') && (userName != null || '') && (userEmail != null || '') && (userPassword != null || '') && (confirmingUserPassword != null || '')) {
        userInformation.name = personName;
        userInformation.userName = userName;
        if (checkEmail(userInformation)) { //Sjekker om mailen eksisterer fra før av.
            if (userPassword === confirmingUserPassword) { //sjekker om passordet er det samme på begge steder.
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
// Sjekker om mailen eksisterer fra før. Sjekker også om det er med @ i mailen og at det kommer et '.' etter @.
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
// Setter alle skriftfelt til null;
function clearFields() {
    personName = null;
    userName = null;
    userEmail = null;
    userPassword = null;
    confirmingUserPassword = null;
}
// Endrer fra logg inn screen til registreings screen.
function changescreen() {
    showScreen = 1;
    updateView();
}
// Tar inn error melding og returner errormeldingen dersom det er en feil som har skjedd.
function checkForErrors(errorMessage) {
    if (errorCode == 1) {
        return errorMessage;
    }
    else {
        errorCode = 1;
        return null;
    }
}
// Sjeker om brukerens email eksisterer fra før av.
function checkIfUserExist(userEmail) {
    for (let i = 0; i < userInfo.length; i++) {
        if (userInfo[i].userEmail == userEmail) {
            return false
        }
    }
    return true
}
// Bytter screen fra registrering til logg inn.
function returnToLogIn(){
    showScreen=0;
    clearFields();
    updateView();
}