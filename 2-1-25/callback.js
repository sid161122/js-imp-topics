function bakeCookies(callback){
    console.log("baking")
    setTimeout(callback,2000)
}

function eatCookies(){
    console.log("cookies are ready")
}

bakeCookies(eatCookies)
//A callback is "do this thing later when you’re done!"