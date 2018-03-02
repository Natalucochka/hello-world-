

 //function cachDifference () {
 // min = document.getElementById("takevalue1").value;
 // max = document.getElementById("takevalue2").value;
 //  if min > max than 
 // alert ("Прослідкуйте, що б нижня границя була менше верхньої")
 // else 
//}

function  getRandom(min, max){
    
    //min = document.getElementById("takevalue1").value;
    //max = document.getElementById("takevalue2").value;
    let number1 = Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
    
  return number1;

  
  }

  function generateFirstNumber(){
     let result = getRandom(document.getElementById('takevalue1').value, document.getElementById('takevalue2').value);
     document.getElementById("getvalue1").value = result;
  }

  function generateSecondNumber(){
    let result = getRandom(document.getElementById('takevalue1').value, document.getElementById('takevalue2').value);
    document.getElementById("getvalue2").value = result;
 }

 function checkIt() {
    
        var getvalue1 = Number (document.getElementById('getvalue1').value);
        var getvalue2 = Number (document.getElementById('getvalue2').value);
        var sign = document.getElementById('sign').value;
       
        var answer 
       
        switch (sign)                       
        {                                  
          case "+":   //Кнопка +
          {
            answer = getvalue1 + getvalue2;
            break;
          }
          case "-":   //Кнопка -
          {
            answer = getvalue1 - getvalue2;
            break;
          }
          case "*":   //Кнопка *
          {
            answer = getvalue1 * getvalue2;
            break;
          }
          case "/":   //Кнопка /
          {
            answer = getvalue1 / getvalue2;
            break;
          }
         
        }
         if (answer == document.getElementById("takevalue3").value) {
         alert("Все вірно!");
         countClicks1();
         
         //var clickcount
         
         //localStorage.setItem ("clickcount" , 0);
         
         
    } else {
            alert("Не правильно! первірте ще раз");
            countClicks2();
        }

        
      
 }
    
 function countClicks1() {
   alert("jj");
  localStorage.clickcount = (localStorage.clickcount) ? Number(localStorage.clickcount) + 1: 1;
  update(); 
  console.log(localStorage.clickcount);   
 }

 function update() {  
   
  document.getElementById("target").innerHTML = localStorage.clickcount || 0 ;
     }

     function countClicks2() {
      alert("jр");
     localStorage.clickcount2 = (localStorage.clickcount2) ? Number(localStorage.clickcount2) + 1: 1;
     update(); 
     console.log(localStorage.clickcount2);   
    }
   
    function update() {  
      
     document.getElementById("target2").innerHTML = localStorage.clickcount2 || 0 ;
        }