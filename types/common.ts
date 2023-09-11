export interface user{
    id?: number,
    email?: string,
    name?: string
}

export interface commentInterface{
    id?:number;
    email?: string,
    body?: string,
}

export interface postInterface{
    id?:number;
    title?:string,
    body?: any,
    userId?: number,
    authorName?:string,
}