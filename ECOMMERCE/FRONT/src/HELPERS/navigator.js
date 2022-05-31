const pages={
    401:"/signIn",
    403:"/",
    200:"/",
    500:"/error",
    "cats":"/cats",
    "products":"/products"
}
export const navigator=(statusCode)=>{
    document.location.href=pages[statusCode]
}