export interface ICharacter {
    name:string,
    age:number,
    happiness:number
}

export interface IQuestion{
    id:number,
    title:string,
    answers:{id:number,answer:string}[]
}