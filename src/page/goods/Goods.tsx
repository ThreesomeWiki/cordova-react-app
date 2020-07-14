import React, { useState } from 'react';
import getImage from '../../server/getImage';
import Icon from '../../components/iconfont';
import GoodsRowDetail from '../home/component/GoodsRowDetail';
import './Goods.scss';

export default function Goods(props) {
    // state
    const [acitveTag, setTag] = useState(0);

    // data
    const data = [
        {
            id: 1,
            cover: getImage('home/good-cover.png'),
            title: 'Adida男士沐浴洁面沐浴露',
            number: 'P5.SG.YW.12589',
            tags: ['自营', '包邮'],
            price: '208.50',
        },
        {
            id: 2,
            cover: getImage('home/good-cover.png'),
            title: 'Adida男士沐浴洁面沐浴露',
            number: 'P5.SG.YW.12589',
            tags: ['自营', '包邮'],
            price: '208.50',
        },
    ];
    const tags = ['全部', '综合', '筛选'];
    const goods = [
        {
            id: 1,
            cover: getImage('home/good-cover.png'),
            title: 'Adida男士沐浴洁面沐浴露',
            number: 'P5.SG.YW.12589',
            tags: ['自营', '包邮'],
            price: '208.50',
            oldPrice: '200',
            count: 1380,
        },
        {
            id: 2,
            cover: getImage('home/good-cover.png'),
            title: 'Adida男士沐浴洁面沐浴露',
            number: 'P5.SG.YW.12589',
            tags: ['自营', '包邮'],
            price: '208.50',
            oldPrice: '200',
            count: 1380,
        },
        {
            id: 3,
            cover: getImage('home/good-cover.png'),
            title: 'Adida男士沐浴洁面沐浴露',
            number: 'P5.SG.YW.12589',
            tags: ['自营', '包邮'],
            price: '208.50',
            oldPrice: '200',
            count: 1380,
        },
        {
            id: 4,
            cover: getImage('home/good-cover.png'),
            title: 'Adida男士沐浴洁面沐浴露',
            number: 'P5.SG.YW.12589',
            tags: ['自营', '包邮'],
            price: '208.50',
            oldPrice: '200',
            count: 1380,
        },
    ];

    // handle
    const onTagClick = index => setTag(index);

    // render
    return (
        <article className="Goods">
            {/* header */}
            <header className="flex-row-center-center header">
                <div className="input flex-row-start-center">
                    <Icon name="sousuo" size={0.15} color="#CACCCB" />
                    <span className="title">搜索相关商品名称</span>
                </div>
            </header>
            {/* tabs */}
            <div className="flex-row-start-center tags">
                {tags.map((tag, index) => (
                    <span
                        key={tag}
                        className={`tag ${acitveTag === index ? 'tag-active' : ''}`}
                        onClick={() => {
                            onTagClick(index);
                        }}>
                        {tag}
                    </span>
                ))}
                <div className="flex1"></div>
                <span className="btn flex-row-center-center">铺货</span>
            </div>
            {/* 商品列表 */}
            {goods.map(good => (
                <GoodsRowDetail key={good.id} good={good} isGood />
            ))}
        </article>
    );
}
