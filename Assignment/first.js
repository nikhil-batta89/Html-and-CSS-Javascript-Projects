//Write a JavaScript function to check whether a string is blank or not.
is_Blank =function(input)
{
    if(input.length === 0)
    return true;
    else
    return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));


//Write a JavaScript function to check whether an 'input' is a string or not.

function is_string(str) {
    return typeof str === 'string';
}

console.log(is_string('w3resource')); //true
console.log(is_string([1, 2, 4, 0])); //false