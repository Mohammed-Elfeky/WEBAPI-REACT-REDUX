export const addToCart = (products, { p_Id: id, price, name, img }) => {
    const itemExists = products.find(ele => ele.p_Id == id)

    if (itemExists) {
        const out = products.map(ele => {
            if (ele.p_Id === id) {
                return { ...ele, quantity: ele.quantity + 1 }
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
export const removeFromCart = (products, p_Id) => {
    let out = []
    products.forEach(ele => {
        if (ele.p_Id == p_Id) {
            if (ele.quantity !== 1) out.push({ ...ele, quantity: ele.quantity - 1 })
        } else {
            out.push({ ...ele })
        }
    })
    return out;
}
export const clearProduct = (products, p_Id) => {
    return products.filter((ele) => ele.p_Id !== p_Id)
}
export const saveCartToStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart))
}
export const calcCartTotal = (products) => {
    let out = products.reduce((prev, { price, quantity }) => {
        return prev + (price * quantity)
    }, 0)
    return out;
}
export const unState = (products) => {
    return [...products.map(ele => { return { ...ele } })]
}
export const initCart = () => {
    return localStorage.getItem("cart") ?
        JSON.parse(localStorage.getItem("cart")) :
        {
            order: {
                address: "",
                date: "",
                u_id: "",
                total: 0,
            },
            orderProducts: []
        }
}
export const convertProductsToDTOformat = (cart) => {
    return {
        order:{...cart.order,address:"alex",date:"2022-05-27T14:12:18.000Z"}, orderProducts: cart.orderProducts.map(({ p_Id, quantity }) => {
            return {p_Id, quantity}
        })
    }
}
export const assignU_idToOrderAndDate = (cart, uid) => {
    return { ...cart, order: { ...cart.order, u_id:uid ,date:new Date()} }
}
export const clearCart=()=>{
    localStorage.removeItem("cart")
    return {
        order: {
            address: "",
            date: "",
            u_id: "",
            total: 0,
        },
        orderProducts: []
    }
}
