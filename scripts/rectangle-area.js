function calculateRectangleArea() {
    // get length of the rectangle
    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value;
    const length = parseFloat(lengthText);
    console.log(length);

    // get width of the rectangle
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value;
    const width = parseFloat(widthText);
    console.log(width);

    // validate input: width and length
    if (isNaN(width) || isNaN(length)) {
        alert('Please insert a number');
        return;
    }
    
    // calculate rectangle area
    const area = length * width;
    console.log('area of the rectangle: ', area);

    // display rectangle area
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;

    addToCalculationEntry('Rectangle', area);
}