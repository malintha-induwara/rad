class Item{
    id: string;
    itemName: string;
    price: number;
    quantity: number;

    constructor(id:string,itemName:string,price:number,quantity:number){
        this.id = id;
        this.itemName = itemName;
        this.price = price;
        this.quantity = quantity;
    }

}

export default Item;