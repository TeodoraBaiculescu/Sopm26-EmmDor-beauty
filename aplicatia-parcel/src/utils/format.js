// Formatare consistentă a prețurilor în stil românesc: 1.234,50 Lei
export function formatPrice(value) {
    const number = Number(value) || 0;
    return `${number.toFixed(2).replace('.', ',')} Lei`;
}
