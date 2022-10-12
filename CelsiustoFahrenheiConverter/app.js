
// Adds eventlistner to the button
document.querySelector('#form-calculate').addEventListener('submit', calulateCToF);
// Function for converting C to F
function calulateCToF(e) {
    // Variables
    const celsius = document.querySelector("#celcius");
    const fahrenheit = document.querySelector("#fahrenheit");
    // Check if something is written in the input.
    if((celsius.value!=='')){
        // Converting and setting value to the output
        const result = (celsius.value * 1.8) + 32;
        fahrenheit.value = result.toFixed(0);
        document.querySelector('.calcVisi').style.display='block';
    }
    else{
        errorMessage('Insert a number')
    }
    // Prevents the refreshing 
    e.preventDefault();
}
// Makes and displays the error message
function errorMessage(error){
    // Makes the result visable
    document.querySelector('.calcVisi').style.display='none';
    // sets the card and heading variable
    const card=document.querySelector('.card');
    const heading=document.querySelector('#heading');
     // Makes a div and gives it class and text
    const errorMesg=document.createElement('div');
    errorMesg.className='alert alert-danger';
    errorMesg.innerText=error;
    // Inserts the error message between the top of the card and the heading
    card.insertBefore(errorMesg,heading)
    // Timer for resetting the error message
    setTimeout(removeError,3000);
}
// Resets the error message
function removeError(){
    document.querySelector('.alert').remove();
}