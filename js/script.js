var year=new Date().getFullYear();
var month=("0" + (new Date().getMonth()+1)).slice(-2);
var date = ("0" + new Date().getDate()).slice(-2);
document.getElementById('txtDate').min = year+"-"+month+"-"+date;
document.getElementById('txtDate').max = (year+1)+"-12-31";
document.getElementById('txtDate').value = year+"-"+month+"-"+date;

function checkNum(elem){
    // console.log(elem.id);
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

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}

document.getElementById('btnSubmit').addEventListener("click",function(){
    var nama = document.getElementById("txtFullName");
    // var kode = document.getElementById("txtKodeNegara").value;
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
},false);