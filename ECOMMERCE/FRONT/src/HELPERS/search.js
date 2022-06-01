export const searchProduuct=(products,word)=>{
    console.log(products.filter(ele=>ele.name.toLowerCase().includes(word.toLowerCase())))
    return products.filter(ele=>ele.name.toLowerCase().includes(word.toLowerCase()))
}