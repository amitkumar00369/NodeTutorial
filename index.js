
function findHcfByequilideanMethod(a,b) {
    while (b!=0){
        let rem = a%b
        console.log(`${a}=${a/b}*${b} + ${rem}`)
        a=b
        b=rem
    }
    return a
    //jdcnkjdckjd
    x=y+x

}

findHcfByequilideanMethod(10,4)