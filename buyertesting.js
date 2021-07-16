function validation(frm) {
    var a= document.getElementById('fname').value;
    var b= document.getElementById('lname').value;
    var tell= document.getElementById("tele").value;
    var pa1=document.getElementById("word1").value;
    var pa2= document.getElementById("word2").value;
    var sta= document.getElementById("state").value;
    var pi= document.getElementById("pin").value;
    var nam=frm.product1;
    var del=frm.delivery;
    var i=0;var checking=0;var count=0;
    if(!isNaN(a)){
         document.getElementById('name1').innerHTML="Invalid entry";
         return false;
    }
    if(!isNaN(b))
    {
         document.getElementById('name2').innerHTML="Invalid entry";
         return false;
    }
    if(a===b)
    {
         document.getElementById('name2').innerHTML="name cannot be same";
         return false;
    }
    if(isNaN(tell)){
         document.getElementById('tel1').innerHTML="Invalid entry";
         return false;
    }
    if(isNaN(pa1))
    {
         document.getElementById('pas1').innerHTML="Use only Number ex(1234,4567) ";
         return false;
    }
    if(pa1!==pa2)
    {
         document.getElementById('pas2').innerHTML="password not matching";
         return false;
    }
    if(!isNaN(sta))
    {
         document.getElementById('state1').innerHTML="Invalid input ";
         return false;
    }
    if(isNaN(pi))
    {
         document.getElementById('pin1').innerHTML="Invalid input";
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
    document.getElementById("sell").innerHTML='select atleast one';
    return false;
    }
    count=0;
    for(checking=0;checking<del.length;checking++){
         if(del[checking].checked==true)
         count=count+1;
    }
    if(count==1){
     return true;
}
if(count===0){
document.getElementById("rad").innerHTML='select atleast one';
return false;
}
    }
    
    