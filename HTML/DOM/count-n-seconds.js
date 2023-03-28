var second=0;
function displayseconds()
{
    second+=1;
    document.getElementById("secondsdisplay").innerHTML="This Page Will Be Redirect In "+second+" Seconds ...";
}
setInterval(displayseconds,1000);

function redirectpage()
{
    window.location="https://www.youtube.com";
}
setTimeout('redirectpage()',4000);

