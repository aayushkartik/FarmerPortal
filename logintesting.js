function check(){
var a= document.getElementById("log").value;
var b= document.getElementById("pass").value;
if(!isNaN(a) && isNaN(b))
{
    document.getElementById("error").innerHTML='';
    document.getElementById("error1").innerHTML='---Invalid Input--- ';
    return false;
}
if(isNaN(a) && !isNaN(b))
{
    document.getElementById("error").innerHTML='---Invalid Input---';
    document.getElementById("error1").innerHTML='';
    return false;
}
if(isNaN(a) && isNaN(b))
{
    document.getElementById("error").innerHTML='---Invalid Input---';
    document.getElementById("error1").innerHTML='---Invalid Input---';
    return false;
}

}