
function CAPTCHA () { 
   
   
    var check1 =  document.getElementById('takevalue').value;
    var check2 =  document.getElementById('take').value;
    var splits1 = check1.split(/(\w)/i)
    var splits2 = check2.split(/(\w)/i)
    splits2.reverse();
     if (splits2 == splits1) 
     alert ("Все вірно!");
    else 
     alert ("Не правильно! первірте ще раз");
     }
     