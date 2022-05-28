export const addToCart = (products,{p_Id:id,price,name,img}) => {

    const itemExists = products.find(ele => ele.p_Id == id)
    
    if (itemExists) {
        const out=products.map(ele => {
            if (ele.p_Id === id) {
                return { ...ele, quantity: ele.quantity+1}
            } else {
                return { ...ele }
            }
        })
        return out;
    }

    products.push({
        p_Id: id,
        quantity: 1,
        price,
        name,
        img
    })
    return products
}
export const removeFromCart=(products,p_Id)=>{
   let out= products.map(ele=>{
        if(ele.p_Id==p_Id) {
            if(ele.quantity !== 1) return{...ele,quantity:ele.quantity-1}
        }else{
            return {...ele}
        }
    })    
    console.log(out)
    return out;
}
export const saveCartToStorage=(cart)=>{
    localStorage.setItem("cart",JSON.stringify(cart))
}


export const calcCartTotal=(products)=>{
    return products.reduce(({Pprice,Pquantity},{Cprice,Cquantity})=>{
       return (Pprice*Pquantity)+(Cprice*Cquantity)
    })
}


export const prepareToUseInHelper=(products)=>{
    return [...products.map(ele=>{return{...ele}})]
} 