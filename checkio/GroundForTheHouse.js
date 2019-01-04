function house(plan) {
    const data = plan.split("\n")
    const InWide = []
    const InHeight = [];
    if(data[0] == ""){
        data.shift()  
    }
    let max = 0
    let min = data[0].length
    data.forEach((str,i) =>{
        str.split("").forEach((sumb,j) =>{
            if(sumb == "#"){
                if (max < j){
                    max = j+1
                }
                if(min > j){
                    min = j
                }
                InHeight.push(i)
            }
        })
    })
    return ((InHeight[InHeight.length-1]+1 - InHeight[0]) * (max+1 - min));
}
console.log(house("\n0000000\n##00##0\n######0\n##00##0\n#0000#0\n"));
