import React from 'react';
import './OrderCard.scss';

export default function OrderCard(props) {
    const { goods = {} } = props;
    return (
        <article className="Order-OrderCard">
            <div>
                <span>订单编号:{goods.orderNum}</span>
                <span>{goods.status}</span>
            </div>
        </article>
    );
}
