import * as React from 'react';
import { Link } from 'react-router-dom';
import { getProductUniqueKey } from 'utils/utils';
import { IItemsData } from '../types/types';
import { formatMoney } from '../utils/utils';

const ItemSearchDetail: React.FunctionComponent<IItemsData> = (props: IItemsData) => {
    const { picture, price: { amount }, title, id} = props;
    const uniqueKey = getProductUniqueKey(props);
    const formattedAmount = formatMoney(amount);
    return (
        <>
            <div className="Items--Results--Card" key={uniqueKey}>
                <div className="Items--Results--Card--Image">
                    <img src={picture} />
                </div>
                <div className="Items--Results--Card--Content">
                    <div className="Items--Results--Card--Content--Subtitle">
                        <Link to={`/items/${id}`}>{title}</Link>
                    </div>
                    <div className="Items--Results--Card--Content--Title">
                        {formattedAmount}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ItemSearchDetail;