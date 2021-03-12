import * as React from 'react';
import { IItemsData } from '../types/types';
import { Button, notification } from 'antd';

import { formatMoney, getProductConditionName } from '../utils/utils';

export interface IItemDetailProps {
    data: IItemsData;
}

const ItemDetailView: React.FunctionComponent<IItemDetailProps> = (props: IItemDetailProps) => {
    const { data } = props;
    const { picture, price: { amount }, title, condition, sold_quantity, description } = data;
    const conditionName = getProductConditionName(condition);
    const formattedAmount = formatMoney(amount);

    const onBuy = () => {
        notification.open({
            type: 'warning',
            message: `Disabled`,
            description: 'Function is not available!',
            placement: 'topRight'
        });
    };

    return (
        <div className="Item">
            <div className="Item--Detail">
                <div className="Item--Detail--Card">
                    <div className="Item--Detail--Card--Image">
                        <img src={picture} alt={title} />
                    </div>
                    <div className="Item--Detail--Card--Content">
                        <div className="Item--Detail--Card--Content--Header">
                            {conditionName} - {sold_quantity} vendidos
                        </div>
                        <div className="Item--Detail--Card--Content--Title">
                            {title}
                        </div>
                        <div className="Item--Detail--Card--Content--Price">
                            {formattedAmount}
                        </div>
                        <div className="Item--Detail--Card--Content--Button">
                            <Button block size="large" type="primary" onClick={onBuy}>Comprar</Button>
                        </div>
                    </div>
                </div>
                {description && (
                    <div className="Item--Detail--Description">
                        <h1>Descripcion</h1>
                        <span>{description}</span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ItemDetailView;