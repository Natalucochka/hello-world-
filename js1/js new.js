function CAPTCHA() {
    var check1 = document.getElementById('takevalue').value;
    var check2 = document.getElementById('take').value;
    var data = check2.split("");
    var reversedArray = data.reverse();
    if (check1 == reversedArray.join("")) {
            alert("Все вірно!");
        } else {
            alert("Не правильно! первірте ще раз");
        }
    }