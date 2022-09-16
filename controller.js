// Sjekker om brukeren eksisterer og om passordet stemmer.
function logginnUser() {
    for (let i = 0; i < model.userInfo.length; i++) {
        if ((model.userInfo[i].userName === model.loggin.userName || model.userInfo[i].userEmail === model.loggin.userName) && (model.userInfo[i].password === model.loggin.userPassword)) {
            model.showScreen = 'SuccessFullyLoggedin';
            model.makeUserErrorMessage=checkForErrors(0,null);
        }
    }
    model.makeUserErrorMessage = checkForErrors(1,'Feil brukernavn eller passord.');
    updateView();
}
// Lager ny bruker.
function makeNewUser() {
    const userInformation = {};
    if ((model.loggin.personName != (null || '')) && (model.loggin.userName != (null || '')) && (model.loggin.userEmail != (null || '')) && (model.loggin.userPassword != (null || '')) && (model.loggin.confirmingUserPassword != (null || ''))) {
        if (checkEmail()) { //Sjekker om mailen eksisterer fra før av.
            if (model.loggin.userPassword === model.loggin.confirmingUserPassword) { //sjekker om passordet er det samme på begge steder.
                addUserToArray(userInformation);
                model.showScreen = 'LoggIn';
                model.makeUserErrorMessage=checkForErrors(0,null);
                clearFields();
            }
            else model.makeUserErrorMessage = checkForErrors(1,'Passordet var ikke likt prøv igjen.');
        }
    }
    else model.makeUserErrorMessage = checkForErrors(1,'Du må fylle ut alle feltene.');
    updateView();
}
// Sjekker om mailen eksisterer fra før. Sjekker også om det er med @ i mailen og at det kommer et '.' etter @.
function checkEmail() {
    if (model.loggin.userEmail.includes('@') && model.loggin.userEmail.includes('.', model.loggin.userEmail.indexOf('@'))) {
        if (checkIfUserExist(model.loggin.userEmail)) {
            return true;
        }
        else{
            model.makeUserErrorMessage=checkForErrors(1,'Denne mailen finnes fra før av');
            return false
        } 
    }
    else {
        model.makeUserErrorMessage = checkForErrors(1,'Du mangler enten @ eller . i mailen');
        return false;
    }
}
// Sjeker om brukerens email eksisterer fra før av.
function checkIfUserExist(userEmail) {
    for (let i = 0; i < model.userInfo.length; i++) {
        if (model.userInfo[i].userEmail == userEmail) {
            return false
        }
    }
    return true
}
// Setter alle skriftfelt til null;
function clearFields() {
    model.loggin.personName = null;
    model.loggin.userName = null;
    model.loggin.userEmail = null;
    model.loggin.userPassword = null;
    model.loggin.confirmingUserPassword = null;
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
    model.makeUserErrorMessage=checkForErrors(0,null);
    model.showScreen = 'RegisterUser';
    updateView();
}
// Bytter screen fra registrering til logg inn.
function returnToLogIn(){
    model.makeUserErrorMessage=checkForErrors(0,null);
    model.showScreen='LoggIn';
    clearFields();
    updateView();
}
// Add user to userInfo array
function addUserToArray(UserObject){
    UserObject.name = model.loggin.personName;
    UserObject.userName = model.loggin.userName;
    UserObject.userEmail = model.loggin.userEmail;
    UserObject.password = model.loggin.userPassword;
    model.userInfo.push(UserObject);
}