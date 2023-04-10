function addone(value)
{
    return value+1;
}

function addtwo(value)
{
    return addone(value+1);
}

function addthree(value)
{
    return addtwo(value+1);
}

function calculation()
{
    return addthree(2) + addtwo(6);
}
calculation();
