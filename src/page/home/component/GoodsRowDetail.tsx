import React from 'react';
import './GoodsRowDetail.scss';

export default function GoodsRowDetail(props) {
    const good = props.good;
    return (
        <article className="Home-GoodsRowDetail flex-row-start-center">
            <img src={good.cover} className="cover" />
            <div className="right flex-column">
                <span className="title">{good.title}</span>
                <span className="number">商品编号：{good.number}</span>
                <div className="flex-row">
                    {good.tags.map(tag => (
                        <span key={tag} className="tag">
                            {tag}
                        </span>
                    ))}
                </div>
                <div className="flex1" />
                <div className="bottom flex-row-between-center">
                    <span className="price">{good.price}元</span>
                    {props.isGood ? (
                        <span className="old-price">
                            零售价：<span className="old-price-count">{good.oldPrice}</span>
                        </span>
                    ) : (
                        <span className="buy-count">{good.count}人已抢购</span>
                    )}
                </div>
            </div>
        </article>
    );
}
