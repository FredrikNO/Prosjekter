updateView();
function updateView(){
    let html='';
    if(showScreen==0){
          html=loggInScreen();  
    }
    else if(showScreen==1){
        html=newUserScreen();
    }
    else if(showScreen==2){
        html=successfullyLoggedin();
    }

    document.getElementById('page').innerHTML=html;
}
function loggInScreen(){
    let html='';
    html=`
        <div class="container1">
        <div class="fontFam">${makeUserErrorMessage||'Skriv inn brukernavn og passord'}</div><hr><br>
        <input class="txtBoxes" type="text" placeholder="Brukernavn eller e-postadresse" oninput="userName=this.value"><br>
        <input class="txtBoxes" type="text" placeholder="Passord" oninput="userPassword=this.value"><br>
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
        <div class="fontFam">${makeUserErrorMessage||'Fyll ut inn info under '}</div><hr>

        <input class="txtBoxes2" type="text" placeholder="Ditt navn" oninput="personName=this.value" value="${personName||''}"><br>
        <input class="txtBoxes2" type="text" placeholder="Brukernavn" oninput="userName=this.value" value="${userName||''}">
        <input class="txtBoxes2" type="email" placeholder="E-postadresse" oninput="userEmail=this.value"value="${userEmail||''}">
        <input class="txtBoxes2" type="text" placeholder="Passord" oninput="userPassword=this.value" value="${userPassword||''}">
        <input class="txtBoxes2" type="text" placeholder="Bekreft passord" oninput="confirmingUserPassword=this.value" value="${confirmingUserPassword||''}"><br>
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