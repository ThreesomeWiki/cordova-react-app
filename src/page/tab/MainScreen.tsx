import React, { useState } from 'react';
import { TabBar } from 'antd-mobile';
import Icon, { IconNames } from '../../components/iconfont';
import Home from '../home/Home';
import Train from '../train/Train';
import Goods from '../goods/Goods';
import Order from '../order/Order';
import User from '../user/User';
import './MainScreen.scss';

interface tabType {
    title: string;
    iconName: IconNames;
    iconNameActive: IconNames;
    Component?: any;
}

export default function MainScreen() {
    const [active, setActive] = useState(4);

    const Tabs: tabType[] = [
        { title: '首页', iconName: 'zu6', iconNameActive: 'zu7', Component: Home },
        { title: '培训', iconName: 'zu2', iconNameActive: 'zu5', Component: Train },
        { title: '货源', iconName: 'zu', iconNameActive: 'zu8', Component: Goods },
        { title: '订单', iconName: 'zu3', iconNameActive: 'zu9', Component: Order },
        { title: '我的', iconName: 'zu1', iconNameActive: 'zu4', Component: User },
    ];

    const onChangeTab = index => setActive(index);

    const CurrentPage = Tabs[active].Component;

    return (
        <div className="MainScreen flex-column">
            <CurrentPage />
            <footer className="footer">
                <TabBar>
                    {Tabs.map((tab, index) => (
                        <TabBar.Item
                            key={tab.title}
                            title={tab.title}
                            icon={<Icon name={index === active ? tab.iconNameActive : tab.iconName} size={0.21} />}
                            onPress={() => onChangeTab(index)}
                        />
                    ))}
                </TabBar>
            </footer>
        </div>
    );
}
