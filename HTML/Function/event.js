function triggerButton()
{
    alert('Enter values in input fields.. ')
}
const nameInput=()=>{
    console.log("Typing Name...");
}
const focussing=()=>{
    console.log("focus on age");
}
const blurring=()=>{
    console.log("focus divereted from age input box");
}
function downkeyPressed()
{
    console.log("A key is preesed");
    console.log(event.key);
}
function Hovereffect()
{
    console.log("Name label Hover");

}
function submitted(event)
{
    event.preventDefault();
    console.log("form submitted succesfully");
}
co