const pages={
    401:"/signIn",
    403:"/userProducts",
    200:"/userProducts",
    500:"/error"
}
export const navigator=(statusCode)=>{
    document.location.href=pages[statusCode]
}