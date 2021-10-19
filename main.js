function isAFactor(num, fact) {
    return (num % fact == 0);
}

function getFactors(num, arr) {
    for (i = 1; i < num; i++) {
        if (isAFactor(num, i)) {
            arr.push(i);
        }
    }
}

function sumFactors(fArr) {
    s = 0;
    for (i = 0; i < fArr.length; i++) {
        s += fArr[i];
    }
    return s;
}

function main() {
    num1 = parseInt(document.querySelector('#num1').value);
    num2 = parseInt(document.querySelector('#num2').value);

    num1F = new Array;
    num2F = new Array;
    getFactors(num1, num1F);
    getFactors(num2, num2F);
    s1 = sumFactors(num1F);
    s2 = sumFactors(num2F);
    r = document.querySelector("#results");
    if (s1 == num2 && s2 == num1) {
        r.innerHTML = `<p>The numbers: 
                            ${num1} and ${num2} are 
                            amicable</p>`;
    } else {
        r.innerHTML = `<p>The numbers: 
                            ${num1} and ${num2} are 
                            not amicable</p>`
    }

    fDisp = document.querySelector("#factors");
    fDisp.innerHTML = `<p>${num1}: factors = ${num1F}, 
                                sum = ${s1}</p> 
                                <br> 
                                <p>${num2}: factors = ${num2F}, 
                                sum = ${s2}</p>`;
}