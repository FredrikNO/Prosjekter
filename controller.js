// Sjekker om brukeren eksisterer og om passordet stemmer.
function logginnUser() {
    for (let i = 0; i < userInfo.length; i++) {
        if ((userInfo[i].userName === userName || userInfo[i].userEmail === userName) && (userInfo[i].password === userPassword)) {
            showScreen = 'SuccessFullyLoggedin';
            makeUserErrorMessage=checkForErrors(0,null);
        }
    }
    makeUserErrorMessage = checkForErrors(1,'Feil brukernavn eller passord.');
    updateView();
}
// Lager ny bruker.
function makeNewUser() {
    const userInformation = {};
    if ((personName != null || '') && (userName != null || '') && (userEmail != null || '') && (userPassword != null || '') && (confirmingUserPassword != null || '')) {
        if (checkEmail(userInformation)) { //Sjekker om mailen eksisterer fra før av.
            if (userPassword === confirmingUserPassword) { //sjekker om passordet er det samme på begge steder.
                addUserToArray(userInformation);
                showScreen = 'LoggIn';
                makeUserErrorMessage=checkForErrors(0,null);
                clearFields();
            }
            else makeUserErrorMessage = checkForErrors(1,'Passordet var ikke likt prøv igjen.');
        }
    }
    else makeUserErrorMessage = checkForErrors(1,'Du må fylle ut alle feltene.');
    updateView();
}
// Sjekker om mailen eksisterer fra før. Sjekker også om det er med @ i mailen og at det kommer et '.' etter @.
function checkEmail(userInformation) {
    if (userEmail.includes('@') && userEmail.includes('.', userEmail.indexOf('@'))) {
        if (checkIfUserExist(userEmail)) {
            return true;
        }
        else{
            makeUserErrorMessage=checkForErrors(1,'Denne mailen finnes fra før av');
            return false
        } 
    }
    else {
        makeUserErrorMessage = checkForErrors(1,'Du mangler enten @ eller . i mailen');
        return false;
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
// Setter alle skriftfelt til null;
function clearFields() {
    personName = null;
    userName = null;
    userEmail = null;
    userPassword = null;
    confirmingUserPassword = null;
}
// Tar inn error melding og returner errormeldingen dersom det er en feil som har skjedd.
function checkForErrors(errorCode,errorMessage) {
    if (errorCode == 1) {
        return errorMessage;
    }
    else {
        return null;
    }
}
// Endrer fra logg inn screen til registreings screen.
function changescreen() {
    makeUserErrorMessage=checkForErrors(0,null);
    showScreen = 'RegisterUser';
    updateView();
}
// Bytter screen fra registrering til logg inn.
function returnToLogIn(){
    makeUserErrorMessage=checkForErrors(0,null);
    showScreen='LoggIn';
    clearFields();
    updateView();
}
// Add user to userInfo array
function addUserToArray(UserObject){
    UserObject.name = personName;
    UserObject.userName = userName;
    UserObject.userEmail = userEmail;
    UserObject.password = userPassword;
    userInfo.push(UserObject);
}