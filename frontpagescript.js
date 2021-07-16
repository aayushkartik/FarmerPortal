var a=["pc6.jpg","pc1.jpg","pc4.jpg","pc2.jpg"];
var i=0;
function slide(){
    document.getElementById('source').src=a[i];
    if(i<a.length-1)
    i++;
    else
    i=0;
}
setInterval(slide,2500)