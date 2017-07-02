/*$(document).ready(function () {
 var jegy = parseInt(prompt('add meg a jegyet'));
 var ertek =(jegy < 1 || jegy > 5 || isNaN(jegy) ) ? 1 : jegy; 
 for (i = 0; i < ertek; i++) {
 switch (jegy)
 {
 case 1:
 document.write('elégtelen<br />');
 break;
 case 2:
 document.write('elégséges<br />');
 break;
 case 3:
 document.write('közepes<br />');
 break;
 case 4:
 document.write('jó<br />');
 break;
 case 5:
 document.write('jeles<br />');
 break;
 default:
 document.write('nem jegy<br />');
 }
 }
 });*/

$(document).ready(function () {

    var jegy = parseInt(prompt('add meg a jegyet'));
    var ertek = (jegy < 1 || jegy > 5 || isNaN(jegy)) ? 1 : jegy;
    var i = 0;
    while (i < ertek) {
        switch (jegy)
        {
            case 1:
                document.write('elégtelen<br />');
                break;
            case 2:
                document.write('elégséges<br />');
                break;
            case 3:
                document.write('közepes<br />');
                break;
            case 4:
                document.write('jó<br />');
                break;
            case 5:
                document.write('jeles<br />');
                break;
            default:
                document.write('nem jegy<br />');
        }
        i++;
    }
});

