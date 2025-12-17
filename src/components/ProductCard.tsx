import type {Produit, ProduitWishList} from "../Utils/types/Produit.ts";
import {type ReactNode} from "react";

type ProductCardProps = {
    product: Produit | ProduitWishList,
    children: ReactNode, // TODO : type button ??
}
const ProductCard = ({product, children} : ProductCardProps) => {

    return (
        <article className="article">

            <h3>{product.name}</h3>
            <p>{product.price}€</p>
            <p>
                {children}
            </p>
        </article>
    )
}

export default ProductCard;