document.getElementById('total').textContent=
localStorage.getItem('itemsCount') ?? 0 
let count=localStorage.getItem("itemsCount")??0;
let cartArr=localStorage.getItem('myItems') //[]
const addCartFn =(p) =>
{
    count++;
    document.getElementById('total').textContent=count;
    localStorage.setItem("itemCount",count)
    cartArr.push(p);
    localStorage.setItem('myItems', Json,stringify(cartArr))
}
