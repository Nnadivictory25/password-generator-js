const mySlider = document.getElementById("range_input");
let valPercent;
let output = document.querySelector('#output_value')

const clipBoard = document.querySelector('#clipboard');
const btn = document.querySelector('.generate_button')
let pwDisplay = document.querySelector('#generated-password-area')
const uppercaseInput = document.querySelector('.uppercase')
const lowercaseInput = document.querySelector('.lowercase')
const numberInput = document.querySelector('.number')
const symbolInput = document.querySelector('.symbol')
const indicator = document.querySelector('.indicator')


const eg = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z']
const lowercaseArray = eg.join('').toLowerCase().split(' ')
const uppercaseArray = eg.join('').toUpperCase().split(' ')
const symbolsArray = ['~`|!@#$%^&*()_-+=.,']
const numbersArray = ['0123456789']


// THIS DIDN'T WORK 😂

// let iteration = lowerCaseArray.length + upperCaseArrayMain.length + symbolsArray.length + nubersArray.length;
// console.log(iteration);

// let selectedItems = [{
//     name: 'lowercase',
//     possibleOutcome: lowercaseArray
// }, {
//     name: 'uppercase',
//     possibleOutcome: uppercaseArray
// }, {
//     name: 'symbols',
//     possibleOutcome: symbolsArray
// }, {
//     name: 'number',
//     possibleOutcome: numbersArray
//     }];
// console.log(selectedItems[0].possibleOutcome);




// calling the generate pasword function
let generatePassword = () => {
    pwDisplay.value = '' // setting the value of the input to be empty just incase if the user has already one before , so to ensure the new genearted value doesn't get combined with the old one

    const uppercaseChecked = uppercaseInput.checked // if/when uppercase checkbox is checked
    const lowercaseChecked = lowercaseInput.checked // if/when lowercase checkbox is checked
    const symbolsChecked = symbolInput.checked // if/when symbols checkbox is checked
    const numberChecked = numberInput.checked // if/when numbers checkbox is checked


    let passwordLength = mySlider.value; // getting how many password to be generated from the slider input value
    let randomNumber = (arr) => {
        return Math.floor(Math.random() * arr.length); // function to get a random number in regards to the arr length passed into it
    }
    let selectedOptionsArray = []; // empty array to get arrays of selected possible combinations
    let possibleCombo = ''; //empty string to get and combine each array inside the array above
    

    let generatedPass = []; // this is where the generated password is pushed into and later converted into a string
    // console.log(passwordLength);
    let numberOfCheckedInputs = document.querySelectorAll('input[type="checkbox"]:checked').length ? undefined : 0;



    if (passwordLength >= 4 && numberOfCheckedInputs !== 0) {

        // generate only works if there is minumum of 4 character length selected and at least one checkbox checked

        // pushing the selected option array into the selectedOptionsArray
        if (uppercaseChecked) selectedOptionsArray.push(uppercaseArray)
        if (lowercaseChecked) selectedOptionsArray.push(lowercaseArray)
        if (symbolsChecked) selectedOptionsArray.push(symbolsArray)
        if (numberChecked) selectedOptionsArray.push(numbersArray)


        for (let x = 0; x < selectedOptionsArray.length; x++) {
           // I am looping through the selctedOptionsArray here to single out each array in it to further convert to a string in the possibleCombo variable
            possibleCombo += selectedOptionsArray[x]
        
        }

        generatedPass.push(possibleCombo) // an array with all the possible combinations
        generatedPass = generatedPass.join('') // converted to a string 

        for (let i = 0; i < passwordLength; i++) {
            pwDisplay.value += generatedPass[randomNumber(generatedPass)]
    
            // looping through the generatedPass string and getting a random value and adding it to the password display element
        }





        
        // console.log(possibleCombo);
        // console.log(generatedPass);
        // console.log(selectedOptionsArray);


    } else if (passwordLength < 4) {
        // alert('minimum of 4 characters to be generated !!')
        Toastify({
            text: "minimum of 4 characters to be generated 😉",
            gravity: "top",
            duration: 3000,
            position: 'right',
            close: true,
            style: {
                background: "linear-gradient(to right, #A4FFAF, #A4FFAa)",
                color: "#000",
                fontWeight: 700,
            }
          }).showToast();
    } else if (numberOfCheckedInputs === 0 || undefined) {
        // alert ('select format for password generation')
        Toastify({
            text: "select format for password generation 😒",
            gravity: "top",
            duration: 3000,
            position: 'right',
            close: true,
            style: {
                background: "linear-gradient(to right, #A4FFAF, #A4FFAa)",
                color: "#000",
                fontWeight: 700,
            }
          }).showToast();
    }




    // wanted to guarantee each option selected will be generated, couldn't , well at least for now 😉
    // let crossCheck = (selectedCombination, array) => {
    //     let sampleArray = [];
    //     sampleArray = pwDisplay.value.split('')

    //     for (let y = 0; y < array.length; y++) 
    //     if (selectedCombination === true && !pwDisplay.value.includes(array[y])) {
    //         pwDisplay.value.substring(0, 1).replace(/^0+/g, '');           
    //         } 

    // }

    
    // displaying the strength of the generated password 
    let displayStrength = () => {
        indicator.innerHTML = ''
        if (passwordLength <= 7 && pwDisplay.value !== '') {
            indicator.innerHTML += `
            <p class="text">small</p>
            <span style="background-color: #d90429;"></span>
            <span style="background-color: #d90429;"></span>
            <span></span>
            <span></span>
            `
        } else if (passwordLength > 7 && passwordLength <= 10 && pwDisplay.value !== '') {
            indicator.innerHTML += `
            <p class="text">medium</p>
            <span style="background-color: #F9CD69;"></span>
            <span style="background-color: #F9CD69;"></span>
            <span style="background-color: #F9CD69;"></span>
            <span></span>
            `
        } else if (passwordLength > 10 && pwDisplay.value !== '') {
            indicator.innerHTML += `
            <p class="text">strong</p>
            <span style="background-color: #38b000;"></span>
            <span style="background-color: #38b000;"></span>
            <span style="background-color: #38b000;"></span>
            <span style="background-color: #38b000;"></span>
            `
        } else {
            // adding a loading svg if nothing is generated when generate button is clicked
            indicator.innerHTML += `
            <img style="position: absolute; width:40px; right:20px;" src="/images/Rolling-1s-200px.svg" alt="">
            `
        }
    }
    


    // crossCheck(uppercaseChecked, uppercaseArray);
    // crossCheck(lowercaseChecked, lowercaseArray);
    // crossCheck(symbolsChecked, symbolsArray);
    // crossCheck(numberChecked, numbersArray);


    displayStrength();
}

// copy to clipboard function
clipBoard.addEventListener('click', () => {
    let text = pwDisplay.value;

    if (pwDisplay.value !== '') {

        navigator.clipboard
        .writeText(text)
        .then(() => {
            // alert("Text copied to clipboard");
            Toastify({
                text: "Password copied to clipboard !",
                gravity: "top",
                duration: 2000,
                position: 'right',
                style: {
                    background: "linear-gradient(to right, #A4FFAF, #A4FFAa)",
                    color: "#000",
                    fontWeight: 700,
                }
              }).showToast();
        })
        .catch((err) => {
            alert("Error in copying text: ", err);
        });
    } else {
        // alert('Nothing to copy here !')
        Toastify({
            text: "Nothing to copy here !",
            gravity: "top",
            duration: 2000,
            position: 'right',
            style: {
                background: "linear-gradient(to right, #A4FFAF, #A4FFAa)",
                color: "#000",
                fontWeight: 700,
            }
          }).showToast();
    }
});



// the slider display function , css is weird , didn't know styling a range input requires js. Thanks to anyone I copied there code
function slider() {
    valPercent = (mySlider.value / mySlider.max)*100;
    mySlider.style.background = `linear-gradient(to right, #A4FFAF ${valPercent}%, #000 ${valPercent}%)`;
    output.textContent = mySlider.value
}
slider();