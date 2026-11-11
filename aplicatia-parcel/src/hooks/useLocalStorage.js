import { useEffect, useState } from 'react';

// Hook reutilizabil pentru persistență locală (Laborator 5, secțiunea 11).
// Citește valoarea o singură dată la montare și o salvează la fiecare schimbare.
export default function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            return stored === null ? initialValue : JSON.parse(stored);
        } catch {
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {
            // Ignorăm erorile de storage (mod privat, cotă depășită).
        }
    }, [key, value]);

    return [value, setValue];
}
