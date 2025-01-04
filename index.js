
function findHcfByequilideanMethod(a,b) {
    while (b!=0){
        let rem = a%b
        console.log(`${a}=${a/b}*${b} + ${rem}`)
        a=b
        b=rem
        x=x+y
    }
    return a

}

findHcfByequilideanMethod(10,4)