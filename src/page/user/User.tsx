import React from 'react';
import Icon, { IconNames } from '../../components/iconfont';
import getImage from '../../server/getImage';
import './User.scss';
import { url } from 'inspector';

interface Navs {
    title: string;
    icon: IconNames;
    bg: string;
}

interface MyOrder {
    title: string;
    icon: IconNames;
}

export default function User() {
    // data
    const navs: Navs[] = [
        { title: '关于我们', bg: getImage('user/nav1.png'), icon: 'guanyuwomen2' },
        { title: '评分建议', bg: getImage('user/nav2.png'), icon: 'tousuyujianyi1' },
        { title: '投诉管理', bg: getImage('user/nav3.png'), icon: 'tousuzixun2' },
        { title: '资金明细', bg: getImage('user/nav4.png'), icon: 'zijin' },
    ];
    const myShop = [
        [
            {
                title: '店铺管理',
                icon: getImage('user/shop-manager.png'),
            },
            {
                title: '店铺装修',
                icon: getImage('user/shop-manager.png'),
            },
            {
                title: '铺货记录',
                icon: getImage('user/shop-manager.png'),
            },
            {
                title: '新手指导',
                icon: getImage('user/shop-manager.png'),
            },
        ],
        [
            {
                title: '自主供货',
                icon: getImage('user/shop-manager.png'),
            },
            {
                title: '店铺托管',
                icon: getImage('user/shop-manager.png'),
            },
            {
                title: '一键开店',
                icon: getImage('user/shop-manager.png'),
            },
            {
                title: '快速补货',
                icon: getImage('user/shop-manager.png'),
            },
        ],
    ];
    const myOrder: MyOrder[] = [
        { title: '订单管理', icon: 'tuihuodan' },
        { title: '收藏夹', icon: 'tuihuodan' },
        { title: '我的订阅', icon: 'tuihuodan' },
        { title: '问题订单', icon: 'tuihuodan' },
        { title: '退货记录', icon: 'tuihuodan' },
    ];

    return (
        <article className="User">
            {/* header */}
            <header className="flex-column-start-center user-header"></header>
            {/* navs */}
            <nav className="flex-row-between-center navs">
                {navs.map(nav => (
                    <div className="flex-column-start-center" key={nav.title}>
                        <div className="flex-row-center-center icon" style={{ backgroundImage: `url('${nav.bg}')` }}>
                            <Icon name={nav.icon} size={0.2} color="white" />
                        </div>
                        <span className="title">{nav.title}</span>
                    </div>
                ))}
            </nav>
            {/* myshop */}
            <div className="flex-column myshop">
                <span className="title">我的店铺</span>
                {myShop.map(shops => (
                    <div className="flex-row-between-center shops" key={shops.map(shop => shop.title).toString()}>
                        {shops.map(shop => (
                            <div className="flex-column-start-center shop" key={shop.title}>
                                <img src={shop.icon} className="img" />
                                <span className="shop-title">{shop.title}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {/* myorder */}
            <div className="flex-column myorder">
                <span className="title">我的订单</span>
                {myOrder.map((order, index) => (
                    <div className="flex-row-start-center order" key={order.title}>
                        <Icon name={order.icon} size={0.18} color="#494A4A" />
                        <div
                            className={`flex-row-between-center right ${
                                index === myOrder.length - 1 ? 'right-noborder' : ''
                            }`}>
                            <span className="order-title">{order.title}</span>
                            <Icon name="right" size={0.12} color="#8F8F8F" />
                        </div>
                    </div>
                ))}
            </div>
        </article>
    );
}
