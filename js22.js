

function cachDifference() {
  min = document.getElementById("takevalue1").value;
  max = document.getElementById("takevalue2").value;
 if (min > max) {
 alert ("Прослідкуйте, щоб нижня границя була менше верхньої")
}
else {
  alert ("Все супер! Продовжуйте!")
}
}


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
         
           count("target", "yes")
                          
    } else {
            alert("Не правильно! первірте ще раз");
        
            count("target2", "no")
        }
              
 }
    
 function count(id, property){
  localStorage[property] = (localStorage[property]) ? Number(localStorage[property]) + 1: 1;
  updateByIdFromLocalStorage(id, property); 

  console.log(localStorage.property);  
  
 }


 
   
    function updateByIdFromLocalStorage(id, property) {  
      
      document.getElementById(id).innerHTML = localStorage[property] || 0 ;
    }


    function clearStorage() {
      
    
      localStorage.clear();
    }





    // function countYes() {
   
 // localStorage.yes = (localStorage.yes) ? Number(localStorage.yes) + 1: 1;
 // updateByIdFromLocalStorage("target", "yes"); 
 // console.log(localStorage.yes);   
// }

 
   //  function countNo() {
   //  localStorage.no = (localStorage.no) ? Number(localStorage.no) + 1: 1;
   //  updateByIdFromLocalStorage("target2", "no"); 
   //  console.log(localStorage.no);   
  //  }
   