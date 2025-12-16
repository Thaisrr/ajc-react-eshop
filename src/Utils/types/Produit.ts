export type Produit = {
    id: number;
    name: string;
    price: number;
}

export type ProduitWishList = Produit & {identifiant: string};