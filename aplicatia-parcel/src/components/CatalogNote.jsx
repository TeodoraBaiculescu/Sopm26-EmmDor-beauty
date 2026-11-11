import { useEffect, useState } from 'react';
import { getBrandCount } from '../api/beautyFacts';

// Numărul de produse din catalogul public Open Beauty Facts pentru brandurile afișate.
export default function CatalogNote({ brands }) {
    const brandsKey = brands.join('|');
    const [state, setState] = useState({ status: 'loading', total: 0 });

    useEffect(() => {
        const list = brandsKey.split('|').filter(Boolean);
        if (list.length === 0) {
            setState({ status: 'idle', total: 0 });
            return undefined;
        }

        const controller = new AbortController();
        setState({ status: 'loading', total: 0 });

        Promise.allSettled(list.map((brand) => getBrandCount(brand, { signal: controller.signal })))
            .then((results) => {
                if (controller.signal.aborted) {
                    return;
                }

                const fulfilled = results.filter((result) => result.status === 'fulfilled');
                if (fulfilled.length === 0) {
                    setState({ status: 'error', total: 0 });
                    return;
                }

                const total = fulfilled.reduce((sum, result) => sum + result.value, 0);
                setState({ status: 'success', total });
            });

        return () => controller.abort();
    }, [brandsKey]);

    if (state.status === 'idle') {
        return null;
    }

    return (
        <p className="catalog-note catalog-note-center" role="status">
            {state.status === 'loading' && 'Se încarcă datele din catalogul mondial…'}
            {state.status === 'error' && 'Catalogul mondial este indisponibil momentan.'}
            {state.status === 'success' && (
                <>
                    <i className="fa-solid fa-globe" aria-hidden="true"></i>{' '}
                    Open Beauty Facts: <strong>{state.total}</strong> produse pentru aceste branduri
                </>
            )}
        </p>
    );
}
