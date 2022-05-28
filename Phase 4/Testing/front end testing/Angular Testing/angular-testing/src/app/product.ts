export class Product {

    constructor(
        public id:number,       // primitive property which hold only one value 
        public title:string,
        public price:number,
        public description:string,
        public category:string,
        public image:string,
        public rating:Rating    // complex property it can hold multiple values 
    ){

    }
}

export class Rating {
    constructor(
        public rate:number,
        public count:number){

    }
}
