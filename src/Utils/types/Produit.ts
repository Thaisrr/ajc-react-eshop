export type Produit = {
    id: number;
    name: string;
    price: number;
    category: Category;
}

export type Category = 'vêtement' | 'nourriture' | 'tech';

export type ProduitWishList = Produit & {identifiant: string};