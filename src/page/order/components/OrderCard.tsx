import React from 'react';
import './OrderCard.scss';

export default function OrderCard(props) {
    const { goods = {} } = props;
    return (
        <article className="flex-column Order-OrderCard">
            <div className="flex-row-between-center card-header">
                <span className="time">订单编号:{goods.orderNum}</span>
                <span className="status">{goods.status}</span>
            </div>
            <div className="flex-row card-body">
                <img src={goods.cover} className="cover" />
                <div className="flex-column">
                    <span className="title">{goods.title}</span>
                    <span className="subtitle">{goods.subtitle}</span>
                    <span className="flex1" />
                    <div className="flex-row-between-center">
                        <span className="count">共{goods.count}件商品</span>
                        <span className="flex1" />
                        <span className="pre-price">合计</span>
                        <span className="price">{goods.price}</span>
                    </div>
                </div>
            </div>
            <div className="flex-row-between-center card-footer">
                <div className="labs">
                    <span className="lab">自营</span>
                    <span className="lab line">|</span>
                    <span className="lab">包邮</span>
                </div>
                <div className="flex-row">
                    <span className="button-left">取消订单</span>
                    <span className="button-right">立即付款</span>
                </div>
            </div>
        </article>
    );
}
