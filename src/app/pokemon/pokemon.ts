export interface Pokemon {
    [x: string]: any;
    id:number;
    hp: number;
    cp:number;
    name:string;
    picture:string;
    types: Array<string>;
    created: Date;
}