// var mylist=['Grapes','1 kg','Maggi','5','Bottle','black'];
       //defining object with literals method
/*        var mylist ={
            grapes :'1 kg',
            maggi: 5 ,
            bottle :['black','pink'],
            scooty:true,
            dist:8,
            travel:function()
            {  //anonymous function
                if(this.dist<=2)
                {
                    this.scooty=false;
                    console.log('Go on the feet for shorter distance');
                    return this.scooty;
                }
                else{
                    console.log('Take my Action');
                    return this.scooty;
                }
            }
        }
console.log(mylist.grapes);
console.log(mylist.travel());*/
// Method 2 - using create method
//var myobj = Object.create();
//var myobj = Object.create(null);
//myobj.fname='Nikhil';
//console.log(myobj.fname);

//Method 3 -using new keyword
var myobj = new Object();
console.log(myobj);

myobj.fname='Nikhil';
console.log(myobj.fname);

/*
1.Blueprint -> prototype
    /       \
properties   functionalities     

    class CelloBottle  {
    Constructor(r,h){   //method
        this.radius=r;
        this.height=h;
        this.logo='cello';
    }
}

let myBottle = new CelloBottle(23,55);
console.log(myBottle);
*/
var mylist ={
    grapes :'1 kg',
    maggi: 5 ,
    bottle :['black','pink'],
    scooty:true,
    dist:8,
}
for(let key in mylist)
{
    console.log(mylist);
    console.log((mylist)[key]);
}

for(let i in mylist)
{
    document.write((mylist)[i]+"<br/>");
        console.log(mylist);

}

var marks={
    eng : 50,
    hindi : 98,
    maths: 54,
}

for(let i in marks)
{
    document.write(i+"<br/>");
} 

for(let i in marks)
{
    document.write((marks)[i]+"<br/>");
} 


var x=prompt("Enter a number = ");
console.log(x);
var y =x.toString();
