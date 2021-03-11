import * as React from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { useLocation } from 'react-router';
import { getQueryParam, parseURLMELISearch } from 'utils/utils';
import ItemSearchView from './item-search.view';
import { IBreadcumbSectionProps } from 'components/breadcumb/breadcumb';
import { IItemsData } from '../types/types';
import Loading from '../../../components/loading/loading';
import Alert from '../../../components/alert/alert';
import { parseBreadcumbStrings } from '../utils/utils';

export interface SearchData {
    items: IItemsData[];
    categories?: IBreadcumbSectionProps[];
}

const ItemSearchContainer: React.FunctionComponent = () => {
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string | undefined>(undefined);
    const [data, setData] = React.useState<SearchData | undefined>(undefined);
    
    // Get search string.
    const searchString: string | null = getQueryParam(useLocation().search, 'q');

    const resetStates = () => {
        setData(undefined);
        setLoading(true);
        setError(undefined);
    };

    const search = (value: string) => {
        resetStates();
        // Parse URL to call MELI API.
        const url = parseURLMELISearch(value);
        // Call to URL.
        axios.get(url).then((res: AxiosResponse) => {
            const { data: { items, categories: stringCategories } } = res;
            const categories: IBreadcumbSectionProps[] = parseBreadcumbStrings(stringCategories);
            setData({ items, categories });
        }).catch((error: AxiosError) => {
            setError(error.message);
        }).then(() => {
            setLoading(false);
        });
    };

    React.useEffect(() => {
        if(searchString) {
            search(searchString);
        }
    }, [searchString]);

    return (
        <div className="Items">
            {loading && <Loading fontSize={50} />}
            {error && <Alert className="alertBannerPadding" banner type="warning" message={error} showIcon />}
            {(!loading && !error) && <ItemSearchView items={data?.items} categories={data?.categories} />}
        </div>
    );
};

export default ItemSearchContainer;