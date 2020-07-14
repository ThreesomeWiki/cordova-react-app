import React from 'react';
import Icon from '../../../components/iconfont';
import './GoodsColumnDetail.scss';

export default function GoodsColumnDetail(props) {
    const good = props.good;
    return (
        <article className="Home-GoodsColumnDetail flex-column">
            <div className="flex-row-center-center cover">
                <img src={good.cover} className="img" />
            </div>
            <span className="title line1">{good.title}</span>
            <span className="sub-title line1">{good.subtitle}</span>
            <div className="flex-row goodstags">
                {good.tags.map(tag => (
                    <span key={tag} className="tag">
                        {tag}
                    </span>
                ))}
            </div>
            <div className="flex-row-between-center bottom">
                <span className="price">{good.price}元</span>
                <Icon name="gouwuche" size={0.2} color="#747474" />
            </div>
        </article>
    );
}
