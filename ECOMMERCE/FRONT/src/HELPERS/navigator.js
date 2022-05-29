const pages={
    401:"/signIn",
    403:"/signIn",
}
export const navigator=(statusCode)=>{
    document.location.href=pages[statusCode]
}