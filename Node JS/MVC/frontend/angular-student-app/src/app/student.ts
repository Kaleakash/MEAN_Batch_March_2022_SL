// model class or interface which is use to map json data 
export interface Student {
    _id:number;
    first_name:string;
    last_name:string;
    class:string;
    grade:string;
    age:number;
    address:string;
    flag:boolean;
}

// export class Student {
//     constructor(
//         public _id:number,
//         public first_name:string,
//         public last_name:string,
        
//     ){}
       
// }