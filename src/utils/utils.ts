import { IItemsData } from "../sections/items/types/types";

// Document query selector
export const querySelector = (selector: string): HTMLElement | null => document.querySelector(selector);

// Function to get query param
export const getQueryParam = (params: string, key: string): string | null => {
    const queryParams = new URLSearchParams(params);
    return queryParams.get(key);
};

// Parse URL to search items
export const parseURLMELISearch = (search: string): string => `${CONFIG.API_URL}/api/items?q=${search}`;

// Parse URL to get item detail
export const parseURLMELIItemDetail = (item: string): string => `${CONFIG.API_URL}/api/item/${item}`;

// Get product Unique key
export const getProductUniqueKey = (product: IItemsData): string=> {
    const {  price: { amount }, id} = product;
    return `${id}_${amount}`;
};

// Split string and join
export const parseStringToKeywords = (value: string, splitCharacter: string=' ', joinCharacter: string=',') => value.split(splitCharacter).join(joinCharacter);