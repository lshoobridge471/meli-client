import { IBreadcumbSectionProps } from "../../../components/breadcumb/breadcumb";
import { IConditions } from "../types/types";

export const conditions: IConditions = {
    'used': 'Usado',
    'new': 'Nuevo'
};

// Get product condition name
export const getProductConditionName = (condition: 'used' | 'new'): string => conditions[condition];

// Function to format money currency.
export const formatMoney = (value: number | bigint, decimals?: number) => {
    const formatter = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: decimals || 0
    });
    return formatter.format(value);
};

// Parse array string into a Breadcumb array string
export const parseBreadcumbStrings = (strings: string[]): IBreadcumbSectionProps[] => (strings?.length) ? strings.map((item: string) => {
    return { name: item } as IBreadcumbSectionProps;
}) : [];