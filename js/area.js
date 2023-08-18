
function calculateTriangleArea (){

    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText);

    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area = 0.5 * base * height;
 
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}

function calculateRectangleArea (){

    const widthField = document.getElementById('rectangle-width');
    const widthValueText = widthField.value;
    const width = parseFloat(widthValueText);

    const lengthField = document.getElementById('rectangle-length');
    const lengthValueText = lengthField.value;
    const length = parseFloat(lengthValueText);

    if(isNaN(width) || isNaN(length)){

        alert('Please insert a number');
        return;

    }

    const area = width * length;

    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

}

// reusable function 

function calculateParallelogramArea() {

    const base = getInputValue('Parallelogram-base');

    const height = getInputValue('Parallelogram-height');

    if(isNaN(base) || isNaN(height)){

        alert('Please insert a number');
        return;

    }

    const area = base * height;

    setElementInnerText('Parallelogram-area', area);

}

function getInputValue(fieldId){

    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;

}

// reusable set span , p , div , 

function setElementInnerText (elementId, area){

    const element = document.getElementById(elementId);
    element.innerText = area;

}


function calculateEllipseArea (){

    const majorRadius = getInputValue ('Ellipse-major-radius');
    const minorRadius = getInputValue ('Ellipse-minor-radius');
    const area = 3.1416 * majorRadius * minorRadius;

    const areaTwoDecimal = area.toFixed(2);

    setElementInnerText('Ellipse-area', areaTwoDecimal);

}

