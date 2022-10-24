export const numberFormatter = (number) => {
    const digits = Math.abs(Math.floor(number)).toString().length

    if(digits < 4){
        return number.toFixed(2)
    }
    else if(digits < 7){
        return `${(number/1000).toFixed(2)}K`
    }
    else{
        return `${(number/1000000).toFixed(2)}M`
    }
}

export const randomNumber = (min, max) => {
    return Math.floor(min + (Math.random() * (max - min + 1)))
}