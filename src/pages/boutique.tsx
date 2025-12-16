import {produits} from "../Utils/db/Produits.ts";
import {useState} from "react";
import type {Produit, ProduitWishList} from "../Utils/types/Produit.ts";

const Boutique = () => {
    const [products] = useState<Produit[]>(produits);
    const [wishList, setWishList] = useState<ProduitWishList[]>([]);

    const addToWish = (produit: Produit) => {
        //const copy = [...wishList];
        //copy.push(produit);
        //setWishList(copy);
        setWishList([...wishList, {
            ...produit,
            identifiant: self.crypto.randomUUID()
        }]);
        console.log(wishList)
    }


    return (
        <>
            <h1>Boutique</h1>

            <section>
                <h2>Noël en Folie</h2>

                <div className="grid">
                    {products.map((p) => (
                        <article key={"eshop" + p.id}>
                            <h3>{p.name}</h3>
                            <p>{p.price}€</p>
                            <button onClick={() => {addToWish(p)}}>💜</button>
                        </article>
                    ))}
                </div>
            </section>

            <section>
                <h2>Wishlist</h2>

                <div className="grid">
                    {wishList.map((p) => (
                        <article key={"wl" + p.identifiant}>
                            <h3>{p.name} -- {p.price}€</h3>
                        </article>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Boutique;