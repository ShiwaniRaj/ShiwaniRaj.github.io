setInterval("two()",2000);
			
var c=1;

function two()
{
    c++;
    if(c>=6)
    {
        c=1;
    }
    document.getElementById('abc').src="img/"+c+".jpg";
}

function one()
{
    c--;
    if(c<=0)
    {
        c=5;
    }
    document.getElementById('abc').src="img/"+c+".jpg";
}