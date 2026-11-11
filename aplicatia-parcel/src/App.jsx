import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { allProducts, budgetProducts, luxuryProducts, promoProducts } from './components/script';
import useLocalStorage from './hooks/useLocalStorage';

import Layout from './components/Layout';
import Acasa from './components/Acasa';
import Produse from './components/Produse';
import BranduriAccesibile from './components/BranduriAccesibile';
import BranduriLux from './components/BranduriLux';
import Promotii from './components/Promotii';
import Contact from './components/Contact';
import Cos from './components/Cos';
import Checkout from './components/Checkout';
import Favorite from './components/Favorite';
import ProdusDetaliu from './components/ProdusDetaliu';
import Cariere from './components/Cariere';
import DespreNoi from './components/DespreNoi';
import EmmaCarabeleaLounge from './components/EmmaCarabeleaLounge';
import ModalitatiPlata from './components/ModalitatiPlata';
import ConditiiLivrare from './components/ConditiiLivrare';
import PoliticaRetur from './components/PoliticaRetur';
import NotFound from './components/NotFound';

// Cheia sub care salvăm datele în browser (Laborator 5, secțiunea 11).
const CART_KEY = 'emmdor:cart';
const FAVORITES_KEY = 'emmdor:favorites';

export default function App() {
    const [cart, setCart] = useLocalStorage(CART_KEY, []);
    const [favorites, setFavorites] = useLocalStorage(FAVORITES_KEY, []);
    const [toast, setToast] = useState(null);

    useEffect(() => {
        if (!toast) return undefined;
        const timer = setTimeout(() => setToast(null), 2600);
        return () => clearTimeout(timer);
    }, [toast]);

    // Derivăm produsele complete din id-urile salvate, ca să nu duplicăm date.
    const cartItems = cart
        .map((line) => {
            const product = allProducts.find((item) => item.id === line.id);
            if (!product) return null;
            return {
                ...line,
                product,
                lineId: `${line.id}::${line.shade || ''}`
            };
        })
        .filter(Boolean);

    const favoriteProducts = favorites
        .map((id) => allProducts.find((product) => product.id === id))
        .filter(Boolean);

    const cartCount = cartItems.reduce((sum, line) => sum + line.qty, 0);

    function showToast(text) {
        setToast({ id: Date.now(), text });
    }

    function addToCart(id, shade = null) {
        const product = allProducts.find((item) => item.id === id);
        if (!product) return;

        setCart((current) => {
            const existing = current.find(
                (line) => line.id === id && (line.shade || null) === (shade || null)
            );

            if (existing) {
                return current.map((line) =>
                    line === existing ? { ...line, qty: line.qty + 1 } : line
                );
            }

            return [...current, { id, qty: 1, shade }];
        });

        showToast(`„${product.name}” a fost adăugat în coș.`);
    }

    function updateCartQty(line, delta) {
        setCart((current) =>
            current.map((item) => {
                if (item.id !== line.id || (item.shade || null) !== (line.shade || null)) {
                    return item;
                }
                return { ...item, qty: Math.max(1, item.qty + delta) };
            })
        );
    }

    function removeFromCart(line) {
        setCart((current) =>
            current.filter(
                (item) => !(item.id === line.id && (item.shade || null) === (line.shade || null))
            )
        );
    }

    function toggleFavorite(id) {
        setFavorites((current) =>
            current.includes(id)
                ? current.filter((favoriteId) => favoriteId !== id)
                : [...current, id]
        );
    }

    function placeOrder() {
        setCart([]);
    }

    return (
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout
                            allProducts={allProducts}
                            cartCount={cartCount}
                            favoritesCount={favorites.length}
                        />
                    }
                >
                    <Route
                        index
                        element={
                            <Acasa
                                promoProducts={promoProducts}
                                luxuryProducts={luxuryProducts}
                                favorites={favorites}
                                toggleFavorite={toggleFavorite}
                                addToCart={addToCart}
                            />
                        }
                    />
                    <Route
                        path="produse"
                        element={
                            <Produse
                                allProducts={allProducts}
                                favorites={favorites}
                                toggleFavorite={toggleFavorite}
                                addToCart={addToCart}
                            />
                        }
                    />
                    <Route
                        path="branduri-accesibile"
                        element={
                            <BranduriAccesibile
                                budgetProducts={budgetProducts}
                                favorites={favorites}
                                toggleFavorite={toggleFavorite}
                                addToCart={addToCart}
                            />
                        }
                    />
                    <Route
                        path="branduri-lux"
                        element={
                            <BranduriLux
                                luxuryProducts={luxuryProducts}
                                favorites={favorites}
                                toggleFavorite={toggleFavorite}
                                addToCart={addToCart}
                            />
                        }
                    />
                    <Route
                        path="promotii"
                        element={
                            <Promotii
                                promoProducts={promoProducts}
                                favorites={favorites}
                                toggleFavorite={toggleFavorite}
                                addToCart={addToCart}
                            />
                        }
                    />
                    <Route path="contact" element={<Contact />} />
                    <Route
                        path="cos"
                        element={
                            <Cos
                                cartItems={cartItems}
                                updateCartQty={updateCartQty}
                                removeFromCart={removeFromCart}
                            />
                        }
                    />
                    <Route
                        path="checkout"
                        element={<Checkout cartItems={cartItems} placeOrder={placeOrder} />}
                    />
                    <Route
                        path="favorite"
                        element={
                            <Favorite
                                favorites={favoriteProducts}
                                toggleFavorite={toggleFavorite}
                                addToCart={addToCart}
                            />
                        }
                    />
                    <Route
                        path="produs/:id"
                        element={
                            <ProdusDetaliu
                                favorites={favorites}
                                addToCart={addToCart}
                                toggleFavorite={toggleFavorite}
                            />
                        }
                    />
                    <Route path="cariere" element={<Cariere />} />
                    <Route path="despre-noi" element={<DespreNoi />} />
                    <Route path="emma-carabelea-lounge" element={<EmmaCarabeleaLounge />} />
                    <Route path="modalitati-plata" element={<ModalitatiPlata />} />
                    <Route path="conditii-livrare" element={<ConditiiLivrare />} />
                    <Route path="politica-retur" element={<PoliticaRetur />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>

            {toast && (
                <div className="toast" role="status" key={toast.id}>
                    {toast.text}
                </div>
            )}
        </BrowserRouter>
    );
}
