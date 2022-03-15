'use strict';
function tri(tab) {

    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < tab.length; i += 1) {
            if (tab[i - 1] > tab[i]) {
                done = false;
                var tmp = tab[i - 1];
                tab[i - 1] = tab[i];
                tab[i] = tmp;
            }
            }
        }
return tab;
}
 let tab=[1,3,2,10,9,15];

tri(tab);
console.log(tab);