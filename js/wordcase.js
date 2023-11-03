
function caseBattle(str){
    let newStr = str.replace(/-/g, "");
    for(let i = 0; i<str.length;i++){
        let character = str[i];
        if(str.includes(character)){
            newStr;
        }
    }
    return newStr;
}
console.log(caseBattle("daniel-is-here"));