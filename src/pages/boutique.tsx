import {produits} from "../Utils/db/Produits.ts";
import {useMemo, useState} from "react";
import type {Category, Produit, ProduitWishList} from "../Utils/types/Produit.ts";
import ProductCard from "../components/ProductCard.tsx";

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

    const removeFromWish = (produit: ProduitWishList) => {
        setWishList(wishList.filter((wish) => wish.identifiant !== produit.identifiant));
    }

    const totalWishList = useMemo(() => {
        return wishList.reduce((sum, product) => sum + product.price, 0)
    }, [wishList]);

    // ---------- Filtre par catégorie
    const [selectedCat, setSelectedCat] = useState<Category | 'all'>('all');

    const filteredProducts = useMemo(() => {
        if(selectedCat === 'all') return products;
        return products.filter((p) => p.category === selectedCat);
    }, [products, selectedCat])


    return (
        <>
            <h1>Boutique</h1>

            <section>
                <h2>Noël en Folie</h2>
                <p>
                    <button onClick={() => setSelectedCat("all")}>All</button>
                    <button onClick={() => setSelectedCat("vêtement")}>Vêtements</button>
                    <button onClick={() => setSelectedCat("nourriture")}>Nourriture</button>
                    <button onClick={() => setSelectedCat("tech")}>Tech</button>
                </p>

                <div className="grid">
                    {filteredProducts.map((p) => (
                        <ProductCard key={"eshop" + p.id} product={p}>
                            <button onClick={() => {addToWish(p)}}>💜</button>
                        </ProductCard>
                    ))}
                </div>
            </section>

            <section>
                <h2>Wishlist ---- {totalWishList}€</h2>

                <div className="grid">
                    {wishList.map((p) => (
                        <ProductCard key={"wl" + p.identifiant} product={p}>
                            <button onClick={() => {removeFromWish(p)}}>🗑️</button>
                        </ProductCard>
                    ))}
                </div>
            </section>
        </>
    )
}

export default Boutique;