export interface ICharacter {
    name:string,
    age:number,
    happiness:number
}

export interface IQuestion{
    id:number,
    title:string,
    answers:{id:number,answer:string,sanguine:number,choleric:number,phlegmatic:number,melancholic:number}[]
}

export interface IResult{
    answer:string,
    sanguine:number,
    choleric:number,
    phlegmatic:number,
    melancholic:number
}

export interface IBook{
    bookName: string;
    description: string;
    sanguine: number;
    choleric: number;
    phlegmatic: number;
    melancholic: number;
    imageSrc:string
}