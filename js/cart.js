// {"items":[{"name":"Round Neck Printed Tunic","price":889,"img":"https://img3.junaroad.com/uiproducts/18007236/zoom_0-1632387554.jpg","quantity":3},{"name":"Lace Detail Printed Flared Tunic","price":1128,"img":"https://img3.junaroad.com/uiproducts/17633685/zoom_0-1617114193.jpg","quantity":1}],"cartLength":3}



let arr=[];

let value=0;
const data = JSON.parse(localStorage.getItem("cart"));
const totalPrice =()=>{
       
   
        arr=data.items;
       data.items.map((ele)=>{
            value=value+ele.price*ele.quantity;


       })

const cartPrice=document.getElementById("basket-subtotal");
const cartPrice1=document.getElementById("basket-total");

       cartPrice.innerText=value;
       cartPrice1.innerText=value;
      return value;

}
totalPrice();
const basket =document.getElementById("arz_basket");

for (let i = 0; i < arr.length; i++) {
        const  basketProduct= document.createElement("div");
        basketProduct.innerHTML=`<div class="item"><div class="product-image"><img src=${arr[i].img} alt="Placholder Image 2" class="product-frame"></div><div class="product-details"><h1><strong><span class="item-quantity">${arr[i].quantity}</span></strong> ${arr[i].name}</h1><p><strong>Navy, Size 18</strong></p><p>Product Code - 232321939</p></div></div><div class="price">${arr[i].price}</div><div class="quantity"><input type="number" value=${arr[i].quantity} min="1" class="quantity-field"></div><div class="subtotal">${arr[i].price*arr[i].quantity}</div><button class="remove">Remove</button>`;
        basketProduct.classList.add("basket-item");
        basket.appendChild(basketProduct);

}

// console.log(document.getElementsByClassName("remove"));


const inputChange= document.getElementsByClassName("quantity-field");
const subtotal =document.getElementsByClassName("subtotal");

console.log(subtotal);
    for(let i=0;i<inputChange.length;i++)
    {
        inputChange[i].addEventListener("change", (e)=>{
                let length;
                    if(arr[i].quantity>=e.target.value)
                    {
                       length= data.cartLength-(arr[i].quantity-parseInt(e.target.value));
                    }
                    else
                    {
                        length= data.cartLength+(parseInt(e.target.value)-arr[i].quantity);
                    }

                        arr[i].quantity=parseInt(e.target.value);
                subtotal[i+1].innerText=parseInt(e.target.value)*arr[i].price;

                        
                       
                        // const items=arr;
                        // const datasend={items:items,cartLength:length};



                        //  localStorage.setItem("cart",JSON.stringify(datasend));  
                        //  totalPrice() ;  


        });
    }



