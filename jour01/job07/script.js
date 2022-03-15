function jourtravaille(date){
    const ferie=['1-1','13-4','1-5','8-5','21-5','1-6','14-7','15-8','1-9','11-9','25-12'];
    var date = new Date(date);
    var jour= date.getDate();
    var mois=date.getMonth()+1;
    var week = date.getDay();

for (let i=0;i<ferie.length;i++){
if(`${mois}-${jour}`==ferie[i]){
    if(week=='6'|| week=='7' ){
        return console.log('cest un week end');
    }
    else {
        return console.log('cest un jour férié');
    }
}
else{
    return console.log('cest un jour travaillé');
}
}   

  console.log(date);


}


// if(`${mois}-${jour}`!=ferie[i] && week!='6' && week!='7') {
//     console.log('cest un jour travaillé');
// }


  



jourtravaille('2022-03-15');