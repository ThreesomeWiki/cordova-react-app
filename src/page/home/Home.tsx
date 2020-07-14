import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../action/userAction';
import Icon from '../../components/iconfont';
import Swiper from 'react-id-swiper';
import getImage from '../../server/getImage';
import Title from './component/Title';
import GoodsRowDetail from './component/GoodsRowDetail';
import GoodsColumnDetail from './component/GoodsColumnDetail';
import './Home.scss';
import 'swiper/swiper.scss';

export default function Home() {
    // props
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer);

    // state
    const [nav, setNav] = useState(0);
    const [activeTag, setActiveTag] = useState(0);

    // effect
    useEffect(() => {
        dispatch(getUser());
    }, []);

    // data
    const navs = ['推荐', '爆款', '包邮区', '新品', '拼多多', '淘宝', '京东'];
    const banner = [''];
    const goods = [
        [
            { id: 1, title: '直播课程', icon: getImage('home/goods1.png') },
            { id: 2, title: '官方供货', icon: getImage('home/goods2.png') },
            { id: 3, title: '开店心情', icon: getImage('home/goods3.png') },
            { id: 4, title: '代理供货', icon: getImage('home/goods4.png') },
            { id: 5, title: '店铺诊断', icon: getImage('home/goods1.png') },
        ],
        [
            { id: 6, title: '面膜', icon: getImage('home/goods2.png') },
            { id: 7, title: '耳机', icon: getImage('home/goods3.png') },
            { id: 8, title: '纸巾', icon: getImage('home/goods4.png') },
            { id: 9, title: '数据线', icon: getImage('home/goods1.png') },
            { id: 10, title: '文具', icon: getImage('home/goods2.png') },
        ],
    ];
    const classifys = [
        [
            { id: 1, icon: getImage('home/classify1.png') },
            { id: 2, icon: getImage('home/classify2.png') },
        ],
        [
            { id: 3, icon: getImage('home/classify3.png') },
            { id: 4, icon: getImage('home/classify4.png') },
        ],
    ];
    const hots = [
        {
            id: 1,
            cover: getImage('home/good-cover.png'),
            title: 'Adida男士沐浴洁面沐浴露',
            number: 'P5.SG.YW.12589',
            tags: ['自营', '包邮'],
            price: '208.50',
            count: 1380,
        },
        {
            id: 2,
            cover: getImage('home/good-cover.png'),
            title: 'Adida男士沐浴洁面沐浴露',
            number: 'P5.SG.YW.12589',
            tags: ['自营', '包邮'],
            price: '208.50',
            count: 1380,
        },
    ];
    const tags = [
        { id: 1, tag: '平台推荐' },
        { id: 2, tag: '热销店铺' },
        { id: 3, tag: 'TOP100' },
        { id: 4, tag: '品牌店铺' },
    ];
    const goodslist = [
        [
            {
                id: 1,
                cover: getImage('home/good-cover.png'),
                title: 'Adida男士沐浴洁面沐浴露',
                subtitle: '控油 祛痘洁 面乳 清爽',
                number: 'P5.SG.YW.12589',
                tags: ['自营', '包邮'],
                price: '208.50',
            },
            {
                id: 2,
                cover: getImage('home/good-cover.png'),
                title: 'Adida男士沐浴洁面沐浴露',
                subtitle: '控油 祛痘洁 面乳 清爽',
                number: 'P5.SG.YW.12589',
                tags: ['自营', '包邮'],
                price: '208.50',
            },
        ],
        [
            {
                id: 3,
                cover: getImage('home/good-cover.png'),
                title: 'Adida男士沐浴洁面沐浴露',
                subtitle: '控油 祛痘洁 面乳 清爽',
                number: 'P5.SG.YW.12589',
                tags: ['自营', '包邮'],
                price: '208.50',
            },
            {
                id: 4,
                cover: getImage('home/good-cover.png'),
                title: 'Adida男士沐浴洁面沐浴露',
                subtitle: '控油 祛痘洁 面乳 清爽',
                number: 'P5.SG.YW.12589',
                tags: ['自营', '包邮'],
                price: '208.50',
            },
        ],
    ];

    // handle
    const onNavClick = index => setNav(index);
    const onTagClick = index => setActiveTag(index);

    return (
        <article className="Home flex-column flex1">
            {/* navs */}
            <nav className="nav flex-row-start-center">
                {navs.map((title, index) => (
                    <span
                        key={title}
                        className={nav === index ? 'title-active' : 'title'}
                        onClick={() => onNavClick(index)}>
                        {title}
                    </span>
                ))}
            </nav>
            {/* header */}
            <header className="header flex-row-start-center">
                <Icon name="zu10" size={0.22} />
                <div className="input-box flex-row-start-center">
                    <Icon name="sousuo" size={0.14} color="#CACCCB" />
                    <span className="input">搜索相关商品名称</span>
                </div>
                <div className="btn">
                    <Icon name="xiaoxi" size={0.2} color="#171717" />
                </div>
                <div className="btn">
                    <Icon name="gouwuche" size={0.2} color="#171717" />
                </div>
                <div className="btn">
                    <Icon name="saomiaoerweimaon" size={0.2} color="#171717" />
                </div>
            </header>
            {/* banner */}
            <Swiper>
                <div className="banner">
                    <img className="img" src={getImage('home/banner1.png')} />
                </div>
            </Swiper>
            {/* goods types */}
            <div className="goods">
                {goods.map(goodlist => (
                    <div key={goodlist.map(good => good.title).toString()} className="flex-row-between-center good-row">
                        {goodlist.map(good => (
                            <div key={good.id} className="good flex-column-center-center">
                                <img className="icon" src={good.icon} />
                                <span className="text">{good.title}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {/* banner */}
            <img src={getImage('home/banner2.png')} className="banner2" />
            {/* classify 分类 */}
            <div className="classify">
                {classifys.map(classify => (
                    <div key={classify.map(types => types.id).toString()} className="types flex-row-between-center">
                        {classify.map(types => (
                            <img key={types.id} src={types.icon} className="icon" />
                        ))}
                    </div>
                ))}
            </div>
            {/* 热卖 */}
            <div className="hot">
                <Title title="热卖排行榜" />
                <div className="flex-row list">
                    {hots.map(hot => (
                        <div className="item" key={hot.id}>
                            <GoodsRowDetail good={hot} />
                        </div>
                    ))}
                </div>
            </div>
            {/* tags */}
            <div className="tags flex-row-between-center">
                {tags.map((tag, index) => (
                    <span
                        key={tag.id}
                        className={`tag ${index === activeTag ? 'tag-active' : ''}`}
                        onClick={() => onTagClick(index)}>
                        {tag.tag}
                    </span>
                ))}
            </div>
            {/* goodslist */}
            <div className="bg">
                {goodslist.map(goods => (
                    <div className="flex-row-between-center goodslist" key={goods.map(good => good.id).toString()}>
                        {goods.map(good => (
                            <GoodsColumnDetail key={good.id} good={good} />
                        ))}
                    </div>
                ))}
                {/* 推荐商品 */}
                <div className="recommand">
                    <Title title="推荐商品" />
                    <div className="flex-column">
                        {hots.map(hot => (
                            <div className="item" key={hot.id}>
                                <GoodsRowDetail good={hot} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
