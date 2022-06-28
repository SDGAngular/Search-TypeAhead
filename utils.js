import { places } from "./data.js";

export const getSuggestions = (keyword)=>{
   const suggestedPlaces= places.filter((eachPlace)=>{
       console.log(keyword);
    
        return eachPlace.indexOf(keyword)===0;
    })

    return new Promise((resp)=>{
        setTimeout(()=>{
            resp(suggestedPlaces)
        },200)
    });
};


export const debounce = (func,delay=500)=>{
    let tmrx;
    return function(){
        const self = this;
        const args = arguments;
        clearTimeout(tmrx);
        tmrx= setTimeout(()=>{func.apply(self,args)},delay)

    }


}