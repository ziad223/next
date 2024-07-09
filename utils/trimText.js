export const trimText = (text, length) => {
    if (!text || typeof text !== 'string') return '';
    if (text.length > length) {
        return text.slice(0, length) + '...';
    }
    return text;
};