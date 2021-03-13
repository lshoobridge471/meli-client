import { IItemsData } from "sections/items/types/types";
import { getProductUniqueKey, getQueryParam, parseStringToKeywords, parseURLMELIItemDetail, parseURLMELISearch, querySelector } from "./utils";

describe('utils test suite', () => {
    const querySelectorMock = jest.fn();
    document.querySelector = querySelectorMock;

    it('querySelector check', () => {
        const elementCheck = '#root';
        querySelector(elementCheck);
        expect(querySelectorMock).toHaveBeenCalledWith(elementCheck);
    });

    it('getQueryParam check', () => {
        const paramValue = "33";
        const urlParams = `?query=${paramValue}`;
        const queryParam = getQueryParam(urlParams, 'query');
        expect(queryParam).toBe(paramValue);
    });

    it('parseURLMELISearch check', () => {
        const search = "macbook";
        const parsedSearchURL = parseURLMELISearch(search);
        const mockedParsedURL = `${CONFIG.API_URL}/api/items?q=${search}`;
        expect(parsedSearchURL).toEqual(mockedParsedURL);
    });

    it('parseURLMELIItemDetail check', () => {
        const item = "macbook";
        const parsedItemURL = parseURLMELIItemDetail(item);
        const mockedParsedURL = `${CONFIG.API_URL}/api/item/${item}`
        expect(parsedItemURL).toEqual(mockedParsedURL);
    });

    it('getProductUniqueKey check', () => {
        const productMock: IItemsData = {
            price: {
                amount: 33,
            },
            id: "44"
        };
        const productUniqueKeyParsed: string = getProductUniqueKey(productMock);
        const productUniqueKey = `${productMock.id}_${productMock.price.amount}`;
        expect(productUniqueKeyParsed).toBe(productUniqueKey);
    });

    it('parseStringToKeywords check', () => {
        const value = "Producto de prueba";
        const parsedTexto = parseStringToKeywords(value);
        const parsedTextMock = 'Producto,de,prueba';
        expect(parsedTexto).toEqual(parsedTextMock);
    });
});