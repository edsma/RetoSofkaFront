import { State } from "../Common/Enums";
import { DetailShopProduct } from "./DetailShopProduct";

export interface Shopping{
    date: Date,
    idType: State,
    id: number,
    clientName: string,
    detailProduct: DetailShopProduct[]
}