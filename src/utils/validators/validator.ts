export const requiredField = (value:string) => {
    if(value){
        return(undefined)
    }
    return('Field is required')
}
export const maxLengthCreator = (maxLength:number) => (value:string) => {
    if(value.length > maxLength){
        return(`max length is ${maxLength} symbols`)
    }
    return(undefined)
}

export const maxLength15 = (value:string) => {
    debugger
    if(value.length > 15){
        return('asd')
    }
    return(undefined)

}