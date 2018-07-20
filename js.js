function myForm () {
    let x=document.forms['form']['name'].value;
    let y=document.forms['form']['email'].value;
    let z=document.forms['form']['namel'].value;
    let form = true;
    if (x.length === 0){
        document.getElementById('namef').innerHTML='<div class="red">Введите имя  </div>';
        document.getElementById('firstName').className = "red";
        form = false;
        return false;
    }
    else {form = true}
    if (y.length === 0){
        document.getElementById('emailf').innerHTML='<div class="red">Введите почту  </div>';
        document.getElementById('email').className = "red";
        form = false;
        return false;
    }else{form = true}
    if (z.length === 0){
        document.getElementById('namel').innerHTML='<div class="red">Введите фамилию  </div>';
        document.getElementById('lastName').className = "red";
        form = false;
        return false;
    }else{form = true}
    at=y.indexOf("@");
    dot=y.indexOf(".");
    if (at<1 || dot <1){
        form = false;
        document.getElementById('emailf').innerHTML='<div class="red">email неправильный </div>';
        document.getElementById('email').className = "red";
        return false;
    }else{form = true}
    if(form){
        alert('Very good');
    }
}