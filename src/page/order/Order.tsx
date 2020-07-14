import React, { useState } from 'react';
import Header from '../../components/Header';
import Icon from '../../components/iconfont';
import './Order.scss';

export default function Order() {
    // state
    const [navIndex, setNavIndex] = useState(0);

    // data
    const navs = ['全部订单', '进行订单', '完成订单'];

    // handles
    const onNavChange = index => setNavIndex(index);

    return (
        <article className="flex1 Order">
            <Header title="我的订单" renderRight={() => <Icon name="icoxinxiaoxi" size={0.22} color="#494A4A" />} />
            {/* 导航 */}
            <nav className="flex-row-between-center navs">
                {navs.map((nav, index) => (
                    <span
                        className={`nav ${navIndex === index ? 'nav-active' : ''}`}
                        onClick={() => onNavChange(index)}>
                        {nav}
                    </span>
                ))}
            </nav>
        </article>
    );
}
