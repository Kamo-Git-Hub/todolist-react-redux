export const requairedFild =(value)=>{
    if(value) return undefined
    return "fild is requaired"
}

export const maxLengthCreater =(maxLength)=>(value)=>{
    if(value.length>maxLength)  return `max length is ${maxLength}`
    return undefined
}