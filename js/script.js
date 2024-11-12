//

// Try using 1 loop instead of 3 and make classes in .css file


// Create a div element called container1
const container1 = document.createElement('div');
container1.id = 'container1'; // Set an ID
container1.style.marginLeft = '150px'
container1.style.marginRight = '150px'

document.body.appendChild(container1);


// Option 1 header
const h4Option1 = document.createElement ('h4');
h4Option1.innerText = 'Option 1';
h4Option1.style.textAlign = 'center';
h4Option1.style.marginBottom = '10px';

container1.appendChild(h4Option1);

// upper part
// flexbox with 5 <h2> elements
// text allign center
// padding top and bottom
// background and font-size color changes 
// using loops and variables


// Option 1, having chatGPT determine all colors separately per row)
const colors = ['#ccffcc', '#b3ffb3', '#99ffee', '#80ffff', '#66ccff'];

for (let i = 0; i < 5; i++) {
    const h2El = document.createElement('h2');
    h2El.innerText = 'rad ' + (i + 1);
    
    h2El.style.textAlign = 'center';
    
    h2El.style.fontSize = `${0.7 + i * 1}em`;     // or without template literals // h2El.style.fontSize = (1 + i * 0.5) + 'em';
    h2El.style.fontWeight = 'bold';
    h2El.style.color = `hsl(240, 90%, 70%)`;
    h2El.style.padding = '10px';
    h2El.style.marginTop = `${5 + i * 10}px`;
    h2El.style.backgroundColor = colors[i];

    container1.appendChild(h2El);
}

//------------------------------------------------------------------------------------------------------------------------------------

// Create a div element called container2
const container2 = document.createElement('div');
container2.id = 'container2'; // Set an ID
container2.style.marginLeft = '150px';
container2.style.marginRight = '150px';

document.body.appendChild(container2);

// Option 2 header
const h4Option2 = document.createElement ('h4');
h4Option2.innerText = 'Option 2';
h4Option2.style.textAlign = 'center';
h4Option2.style.marginBottom = '10px';

container2.appendChild(h4Option2);

// Option 2, calculate hue for each row
for (let i = 0; i < 5; i++) {
    let h2El = document.createElement('h2');
    h2El.innerText = 'Rad ' + (i + 1);

    var hue = 120 + i * 30; // Starting from 120 (green) and increasing by 30 degrees

    h2El.style.textAlign = 'center';
    h2El.style.fontSize = (0.7 + i * 1) + 'em'; // Using string concatenation
    h2El.style.fontWeight = 'bold';
    h2El.style.color = `hsl(240, 90%, 70%)`;
    h2El.style.padding = '10px';
    h2El.style.marginTop = (10 + i * 10) + 'px'; // Increase margin as the row index increases
    h2El.style.backgroundColor = 'hsl(' + hue + ', 100%, 85%)'; // Using HSL color

    container2.appendChild(h2El);
}

//------------------------------------------------------------------------------------------------------------------------------------

// FLEXBOX with 3 flexboxes
const container3 = document.createElement('div');

container3.style.border = '1px solid black'; // Set border
container3.style.padding = '100px'; // Optional: Add some padding
container3.style.margin = '150px';
container3.style.display = 'flex';
// container3.style.boxSizing = 'border-box';
container3.style.justifyContent = 'space-around'; // Space out the inner divs evenly
container3.style.flexDirection = 'row'; // Arrange the inner divs in a row

document.body.appendChild(container3);

//-------------------------------------------------

// Create 3 smaller divs inside container3

// Create the first smaller div
const divLeft = document.createElement('div');
divLeft.id = 'divLeft'; // Assign unique ID
divLeft.style.width = '100px';

divLeft.style.backgroundColor = '#b3b3ff';
divLeft.style.display = 'flex';
divLeft.style.alignItems = 'left';
//divLeft.style.justifyContent = 'left';
divLeft.style.flexDirection = 'column';
divLeft.style.padding = '10px';


//-------------------------------------------------

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < numbers.length; i++) {
   
    let numberElement = document.createElement('div'); 
    numberElement.innerText = i; 
    numberElement.style.margin = 'none';
    numberElement.style.padding = '10px';
    


    if (numbers[i] === 4) {
        numberElement.style.backgroundColor = 'transparent';
        numberElement.style.color = 'black'; // Ensure text is visible
    } else if (numbers[i] % 2 === 0) { // Even number (excluding '4')
        numberElement.style.backgroundColor = 'black';
        numberElement.style.color = 'white';
    } else { // Odd number
       numberElement.style.backgroundColor = 'white';
        numberElement.style.color = 'black';
    }

    divLeft.appendChild(numberElement);
}

//--------------------------------------------

// Create the second smaller div
const divCenter = document.createElement('div');
divCenter.id = 'divCenter'; // Assign unique ID
divCenter.style.width = '100px';
divCenter.style.backgroundColor = '#b3b3ff';
divCenter.style.display = 'flex';
// divCenter.style.alignItems = 'center';
divCenter.style.flexDirection = 'column';
divCenter.style.padding = '10px';

let numbersBack = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

for (let i = 0; i < numbers.length; i++) {
   
    let numberElement = document.createElement('div'); 
    numberElement.innerText = numbersBack[i]; 
    numberElement.style.padding = '10px';
    numberElement.style.textAlign = 'center';
    

    if (numbers[i] === 1) {
        numberElement.style.backgroundColor = 'transparent';
        numberElement.style.color = 'black'; // Ensure text is visible
    } else if (numbers[i] % 2 === 1) { // Even number (excluding '4')
        numberElement.style.backgroundColor = 'black';
        numberElement.style.color = 'white';
    } else { // Odd number
        numberElement.style.backgroundColor = 'white';
        numberElement.style.color = 'black';
    }

    divCenter.appendChild(numberElement);
}

//--------------------------------------------

// Create the third smaller div
const divRight = document.createElement('div');
divRight.id = 'smallDiv3'; // Assign unique ID
divRight.style.width = '100px';
divRight.style.backgroundColor = '#b3b3ff';
divRight.style.display = 'flex';
//divRight.style.alignItems = 'flex-end';
//divRight.style.justifyContent = 'right';
divRight.style.flexDirection = 'column';
divRight.style.padding = '10px';

let numbersWritten = ['ett', 'två', 'tre','fyra','fem','sex','sju','åtta','nio','tio'];

for (let i = 0; i < numbersWritten.length; i++) {
   
    let numberElement = document.createElement('div'); 
    numberElement.innerText = numbersWritten[i]; 
    // numberElement.style.marginLeft = '10px'
    // numberElement.style.marginRight = '10px'
    numberElement.style.padding = '10px';
    numberElement.style.textAlign = 'end'

    if (numbers[i] === 5) {
        numberElement.style.backgroundColor = 'transparent';
        numberElement.style.color = 'black'; // Ensure text is visible
    } else if (numbers[i] % 2 === 0) { // Even number (excluding '4')
        numberElement.style.backgroundColor = 'black';
        numberElement.style.color = 'white';
    } else { // Odd number
        numberElement.style.backgroundColor = 'white';
        numberElement.style.color = 'black';
    }

    divRight.appendChild(numberElement);
}

// Append the smaller divs to container3
container3.appendChild(divLeft);
container3.appendChild(divCenter);
container3.appendChild(divRight);




