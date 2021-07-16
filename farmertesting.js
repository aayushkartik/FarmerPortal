function validation() {
var a= document.getElementById('fname').value;
var b= document.getElementById('lname').value;
var tell= document.getElementById("tele").value;
var pa1=document.getElementById("word1").value;
var pa2= document.getElementById("word2").value;
var sta= document.getElementById("state").value;
var pi= document.getElementById("pin").value;
var nam=document.forms.product1;
var del=document.forms.delivery;
var del1=document.forms.delivery1;
var del2=document.forms.delivery2;
var del3=document.forms.delivery3;
var i=0;var checking=0;var count=0;
if(!isNaN(a)){
     document.getElementById('name1').innerHTML="<---Invalid entry--->";
     return false;
}
if(!isNaN(b))
{
     document.getElementById('name2').innerHTML="<---Invalid entry--->";
     return false;
}
if(a===b)
{
     document.getElementById('name2').innerHTML="<---name cannot be same--->";
     return false;
}
if(isNaN(tell)){
     document.getElementById('tel1').innerHTML="<---Invalid entry---->";
     return false;
}
if(isNaN(pa1))
{
     document.getElementById('pas1').innerHTML="<---Use only Number ex(1234,4567)---> ";
     return false;
}
if(pa1!==pa2)
{
     document.getElementById('pas2').innerHTML="<---password not matching--->";
     return false;
}
if(!isNaN(sta))
{
     document.getElementById('state1').innerHTML="<---Invalid input---> ";
     return false;
}
if(isNaN(pi))
{
     document.getElementById('pin1').innerHTML="<---Invalid input--->";
     return false;
}
for(i=0;i<nam.length;i++)
{
     if(nam[i].checked===true)
     count=count+1;
}
if(count>=1){
     return true;
}
if(count===0){
document.getElementById("sell").innerHTML='<---select atleast one--->';
return false;
}
if((del1[0].checked===true)||(del1[1].checked===true)){
     return true;
}
if((del1[0].checked===false)&&(del1[1].checked===false)){
     document.getElementById("rad1").innerHTML='<---select at least one--->';
return false;
}
if(del[0].checked===true||del[1].checked===true){
     return true;
}
if(del[0].checked===false&&del[1].checked===false){
     document.getElementById("rad").innerHTML='select at least one';
return false;
}
if(del2[0].checked===true||del2[1].checked===true){
     return true;
}
if(del2[0].checked===false&&del2[1].checked===false){
     document.getElementById("rad2").innerHTML='select at least one';
return false;
}
if(del3[0].checked===true||del3[1].checked===true){
     return true;
}
if(del3[0].checked===false&&del3[1].checked===false){
     document.getElementById("rad3").innerHTML='select at least one';
return false;
}
}

