


// function calculateParallelogramArea() {
//     // const baseInput = document.getElementById('parallelogram-base');
//     // const baseText = baseInput.value;
//     // const base = parseFloat(baseText);
//     // console.log(base);

//     const base = getParallelogramBase();
//     console.log(base);


// }

// function getParallelogramBase(){
//     const baseInput = document.getElementById('parallelogram-base');
//     const baseText = baseInput.value;
//     const base = parseFloat(baseText);
//     return base;
// }

// reusable function --> reduce duplicate code
function calculateParallelogramArea() {

    const base = getInputValueById('parallelogram-base');
    // console.log('base value', base);

    const height = getInputValueById('parallelogram-height');
    // console.log('height value', height);

    // validate
    if (isNaN(base) || isNaN(height)) {
        alert('Please insert number');
        return
    }
    const area = base * height;
    console.log('area of the parallelogram is ', area);

    setInnerTextById('parallelogram-area', area);
    addToCalculationEntry('Parallelogram: ', area);

}

// reusable get input value field in number
function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}
// reusable set span, p, div, etc text
function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}