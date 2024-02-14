function calculateEllipseArea() {
    const majorRadius = getInputValueById('ellipse-major-radius');
    const minorRadius = getInputValueById('ellipse-minor-radius');
    const area = 3.14 * majorRadius * minorRadius;
    const areaTwoDecimal = area.toFixed(2);
    setInnerTextById('ellipse-area', areaTwoDecimal);
    addToCalculationEntry('Ellipse: ', areaTwoDecimal);
}