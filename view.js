updateView();
function mainView(){
let html='';
html=`
<div>
${model.view}
</div>
`;
document.getElementById('page').innerHTML=html;
}


function updateView(){
    switch (model.showScreen) {
        case 'LoggIn':
            model.view=loggInScreen(); 
            break;
        case 'RegisterUser':
            model.view=newUserScreen();
            break;
        case 'SuccessFullyLoggedin':
            model.view=successfullyLoggedin();
            break;
        default:
            console.log(model.showScreen);
            break;
    }
    mainView();
}
function loggInScreen(){
    let html='';
    html=`
        <div class="container1">
        <div class="fontFam">${model.makeUserErrorMessage||'Skriv inn brukernavn og passord'}</div><hr><br>
        <input class="txtBoxes" type="text" placeholder="Brukernavn eller e-postadresse" oninput="model.loggin.userName=this.value"><br>
        <input class="txtBoxes" type="text" placeholder="Passord" oninput="model.loggin.userPassword=this.value"><br>
        <button class="btnStyle1" onclick="logginnUser()">Logg inn</button> <br><hr><br>
        <button class="btnStyle2" onclick="changescreen()">Registrer ny bruker</button>
        </div>
    `;
    return html;
}
function newUserScreen(){
    let html='';
    html=`
        <div class="container2">
        <div class="fontFam">${model.makeUserErrorMessage||'Fyll ut inn info under '}</div><hr>

        <input class="txtBoxes2" type="text" placeholder="Ditt navn" oninput="model.loggin.personName=this.value" value="${model.loggin.personName||''}"><br>
        <input class="txtBoxes2" type="text" placeholder="Brukernavn" oninput="model.loggin.userName=this.value" value="${model.loggin.userName||''}">
        <input class="txtBoxes2" type="email" placeholder="E-postadresse" oninput="model.loggin.userEmail=this.value"value="${model.loggin.userEmail||''}">
        <input class="txtBoxes2" type="text" placeholder="Passord" oninput="model.loggin.userPassword=this.value" value="${model.loggin.userPassword||''}">
        <input class="txtBoxes2" type="text" placeholder="Bekreft passord" oninput="model.loggin.confirmingUserPassword =this.value" value="${model.loggin.confirmingUserPassword||''}"><br>
        <button class="btnStyle1 fontFam" onclick="makeNewUser()">Registrer</button><br>
        <button class="btnStyle2" onclick="returnToLogIn()">Tilbake til logg inn</button>
        </div>
    `;
    return html;
}
function successfullyLoggedin(){
    let html='';
    html='Du er logget inn';
    return html;
}