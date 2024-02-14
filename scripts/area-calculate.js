// add to calculation entry
/**
 * 1. get the element where you want to add the dynamic HTML
 * 2. create an element you want to add
 * 3. if needed add some class
 * 4. set inner HTML. it could be dynamic Template string 
 * 5. append the created element as a child of the parent
 */
function addToCalculationEntry(areaType, area) {
    console.log(areaType + ' ' + area)


    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4');
    p.classList.add('px-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`;

    calculationEntry.appendChild(p);
}


// Data validation 
/**
 * 1. set the proper type of the input field. (number, data, email)
 * 2. check type using typeof
 * 3. NaN means: Not a Number.  isNaN is checking whether the input is not a number or not
*/