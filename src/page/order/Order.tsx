import React, { useState } from 'react';
import Header from '../../components/Header';
import Icon from '../../components/iconfont';
import OrderCard from './components/OrderCard';
import getImage from '../../server/getImage';
import './Order.scss';

export default function Order() {
    // state
    const [navIndex, setNavIndex] = useState(0);

    // data
    const navs = ['全部订单', '进行订单', '完成订单'];
    const orders = [
        {
            id: 1,
            orderNum: '20201949520',
            status: '代付款',
            cover: getImage('home/good-cover.png'),
            title: 'WIS男士控油祛痘洁面乳清爽男生洗面奶保湿去黑头',
            subtitle: '黑色:M码',
            count: 1,
            price: 230,
        },
        {
            id: 2,
            orderNum: '20201949520',
            status: '代付款',
            cover: getImage('home/good-cover.png'),
            title: 'WIS男士控油祛痘洁面乳清爽男生洗面奶保湿去黑头',
            subtitle: '黑色:M码',
            count: 1,
            price: 230,
        },
        {
            id: 3,
            orderNum: '20201949520',
            status: '代付款',
            cover: getImage('home/good-cover.png'),
            title: 'WIS男士控油祛痘洁面乳清爽男生洗面奶保湿去黑头',
            subtitle: '黑色:M码',
            count: 1,
            price: 230,
        },
        {
            id: 4,
            orderNum: '20201949520',
            status: '代付款',
            cover: getImage('home/good-cover.png'),
            title: 'WIS男士控油祛痘洁面乳清爽男生洗面奶保湿去黑头',
            subtitle: '黑色:M码',
            count: 1,
            price: 230,
        },
    ];

    // handles
    const onNavChange = index => setNavIndex(index);

    return (
        <article className="flex1 Order">
            <Header title="我的订单" renderRight={() => <Icon name="icoxinxiaoxi" size={0.22} color="#494A4A" />} />
            {/* 导航 */}
            <nav className="flex-row-between-center navs">
                {navs.map((nav, index) => (
                    <span
                        key={nav}
                        className={`nav ${navIndex === index ? 'nav-active' : ''}`}
                        onClick={() => onNavChange(index)}>
                        {nav}
                    </span>
                ))}
            </nav>
            {/* order */}
            <div className="flex-column orders">
                {orders.map(order => (
                    <OrderCard key={order.id} goods={order} />
                ))}
            </div>
        </article>
    );
}
