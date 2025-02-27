// get date today
var year=new Date().getFullYear();
var month=("0" + (new Date().getMonth()+1)).slice(-2);
var date = ("0" + new Date().getDate()).slice(-2);
document.getElementById('txtDate').min = year+"-"+month+"-"+date;
document.getElementById('txtDate').max = (year+1)+"-12-31";
document.getElementById('txtDate').value = year+"-"+month+"-"+date;

// checker input value
function checkNum(elem){
    if((elem.value.toString()).length>0){
        if(!isNumeric(elem.value)){
            alert(elem.placeholder+" Invalid!");
            elem.value="";
            elem.focus();
        }
        if((elem.value.toString()).length>=elem.getAttribute('maxlength')){
            alert(elem.placeholder+" Too Long!");
            // elem.value="";
            elem.focus();
        }
    }
}

// Checker nuumber input only
function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

// Form Validation
document.getElementById('btnSubmit').addEventListener("click",validationForm);
function validationForm(){
    var nama = document.getElementById("txtFullName");
    var nowa = document.getElementById("txtPhone");
    var boolnama = false;
    var boolnowa = false;
    if(isNaN(nama.value)){
        boolnama = true;
    }
    if(!isNaN(nowa.value) && nowa.value.toString().length>0){
        if(nowa.value.toString().length > nowa.getAttribute('minlength')){
            boolnowa = true;
        }else{
            alert(nowa.placeholder+" Too Short!");
        }
    }
    if(!boolnama || !boolnowa){
        alert('Please fill all data required above!');
    }else{
        alert('Your data submitted.\n Thank you!');
        document.getElementById("txtFullName").value="";
        document.getElementById("txtFullName").focus();
        // kode="";
        document.getElementById("txtPhone").value="";
    }
}

// slide show image
let slideIndex = 0;
showSlides();
function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}