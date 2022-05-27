const pages={
    401:"/signIn",
    403:"/signIn",
}
export const navigator=(statusCode)=>{
    console.log(pages[statusCode])
    // document.location.href=pages[statusCode]
}