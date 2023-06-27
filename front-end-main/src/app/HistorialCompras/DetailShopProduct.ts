import { Products } from "../Productos/Products";

export interface DetailShopProduct{
    quantity: number,
    idProduct?: string;
    nameProduct?: string;
    product?: Products
}