export interface Filters{
    top: number;
    page: number;
    rowToOrder: string;
}

export interface Products{
    idProduct?: string;
    nameProduct: string;
    inInventory: number;
    enabled: boolean;
    min: number;
    max: number;
    quantity: number;
}