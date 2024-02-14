function calculateRhombusArea() {
    const b1 = getInputValueById('rhombus-base1');
    // console.log('base value', base);

    const b2 = getInputValueById('rhombus-base2');
    // console.log('height value', height);

    const area = 0.5 * b1 * b2;
    console.log('area of the Rhombus is ', area);

    setInnerTextById('rhombus-area', area);
    addToCalculationEntry('Rhombus: ', area);

}