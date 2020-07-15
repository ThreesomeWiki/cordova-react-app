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
export default function User() {
    const navs: Navs[] = [
        { title: '关于我们', bg: getImage('user/nav1.png'), icon: 'guanyuwomen2' },
        { title: '评分建议', bg: getImage('user/nav2.png'), icon: 'tousuyujianyi1' },
        { title: '投诉管理', bg: getImage('user/nav1.png'), icon: 'tousuzixun2' },
        { title: '资金明细', bg: getImage('user/nav2.png'), icon: 'zijin' },
    ];
    return (
        <article className="User">
            {/* header */}
            <header className="flex-column-start-center user-header"></header>
            {/* navs */}
            <nav>
                {navs.map(nav => (
                    <div>
                        <div style={{ backgroundImage: `url('${nav.bg}')` }}>
                            <Icon name={nav.icon} size={0.2} color="white" />
                        </div>
                        <span>{nav.title}</span>
                    </div>
                ))}
            </nav>
        </article>
    );
}
