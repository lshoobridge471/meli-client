import * as React from 'react';
import { useParams } from 'react-router';
import { parseURLMELIItemDetail } from 'utils/utils';
import { IItemsData } from '../types/types';
import ItemDetailView from './item-detail.view';
import axios, { AxiosError, AxiosResponse } from 'axios';
import Loading from '../../../components/loading/loading';
import Alert from '../../../components/alert/alert';
import { Helmet } from 'react-helmet';

const ItemDetailContainer: React.FunctionComponent = () => {
    const { id } = useParams() as IItemsData;
    
    const [loading, setLoading] = React.useState<boolean>(true);
    const [error, setError] = React.useState<string| undefined>(undefined);
    const [data, setData] = React.useState<IItemsData | undefined>(undefined);

    const getProduct = (id: string) => {
        // Parse URL to call MELI API.
        const url = parseURLMELIItemDetail(id);
        // Call to URL.
        axios.get(url).then((res: AxiosResponse) => {
            const { data } = res;
            setData(data);
        }).catch((error: AxiosError) => {
            setError(error.message);
        }).then(() => {
            setLoading(false);
        });
    };

    React.useEffect(() => {
        if(id) {
            getProduct(id);
        }
    }, [id]);

    return (
        <>
            {loading && <Loading size="large" fontSize={50} />}
            {error && <Alert className="alertBannerPadding" banner type="warning" message={error} showIcon />}
            {(!loading && !error && data) && (<>
                <Helmet htmlAttributes={{ lang : 'es' }}>
                    <title>MercadoLibre - {data?.title}</title>
                </Helmet>
                <ItemDetailView data={data} />
            </>)}
        </>
    );
};

export default ItemDetailContainer;