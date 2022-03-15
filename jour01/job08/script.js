'use strict';
function sommenombrespremiers(num,num2) {

    let nbDiv = 0;
    let nbDiv2=0;

    for (let j = 1; j <= num; j++) {
        if (num / j ==1) {
            nbDiv++;
        }
        if (nbDiv == 2) {
        return false;
    }
    
    }
    for (let k = 1; k <= num2; k++) {
        if (num2 / k == 1) {
            nbDiv2++;
        }
        if (nbDiv2 == 2) {
        return false;
    }

    }

console.log(num+num2);
}
console.log(sommenombrespremiers(3,3));
    
    


