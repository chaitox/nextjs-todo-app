import { hasCookie, getCookie, setCookie } from "cookies-next";

export const getCookieCart = (): { [id: string]: number } => {
    if (hasCookie('cart')) {
        const cookies = JSON.parse((getCookie('cart') as string) ?? '{}');
        return cookies;
    }
    return {};
}

export const addProductToCart = (id: string) => {
    const cookies = getCookieCart();
    if (cookies[id]) {
        cookies[id] += 1;
    } else {
        cookies[id] = 1;
    }
setCookie('cart', JSON.stringify(cookies));
}

export const deleteProductToCart = (id: string) => {
    const cookies = getCookieCart();
    if (cookies[id]) {
        cookies[id] -= 1;
    } else {
        delete cookies[id];
    }
setCookie('cart', JSON.stringify(cookies));
}