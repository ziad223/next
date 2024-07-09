export const maskPhoneNumber = (phone) => {
    if (!phone) return '';
    const visibleDigits = 3;
    const maskedSection = phone.slice(0, -visibleDigits).replace(/\d/g, '*');
    const visibleSection = phone.slice(-visibleDigits);
    return maskedSection + visibleSection;
};

export const maskEmail = (email) => {
    if (!email) return '';
    const [localPart, domain] = email.split('@');
    const maskedLocalPart = localPart.replace(/./g, '*');
    return maskedLocalPart + '@' + domain;
};