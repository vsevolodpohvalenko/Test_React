 export const required=(value)=>{
   if (value) return undefined;
    return  "Field is required"
}

  export const maxLengthCreator =(LengthMax) => (value) =>{
      if (value.length > LengthMax) return `Max length is ${LengthMax} symbols`
      return undefined
  }

