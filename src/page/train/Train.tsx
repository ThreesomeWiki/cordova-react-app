import React from 'react';
import Header from '../../components/Header';
import Icon, { IconNames } from '../../components/iconfont';
import Title from '../home/component/Title';
import ColumnVideo from './components/ColumnVideo';
import RowVideo from './components/RowVideo';
import getImage from '../../server/getImage';
import './Train.scss';

interface Nav {
    icon: IconNames;
    title: string;
    background: string[];
}

interface Teacher {
    id: number;
    icon: IconNames;
    name: string;
    title: string;
    score: number;
    couseCount: number;
}

export default function Train() {
    // data
    const navs: Nav[] = [
        { icon: 'zhibo-1', title: '直播公告', background: ['#FFBD16', '#FFA212'] },
        { icon: 'zhibo-1', title: 'VIP进阶', background: ['#14BB7C', '#4ED990'] },
        { icon: 'zhibo-1', title: '学习中心', background: ['#FF856A', '#FD6442'] },
        { icon: 'zhibo-1', title: '个性辅导', background: ['#6075FF', '#2A50E8'] },
    ];
    const teachers: Teacher[] = [
        { id: 1, icon: 'QQ', name: '灰灰', title: '直通车推广、淘宝店铺装修', score: 5, couseCount: 12 },
        { id: 2, icon: 'QQ', name: '灰灰', title: '直通车推广、淘宝店铺装修', score: 5, couseCount: 12 },
    ];
    const hotVideos = [
        [
            {
                id: 1,
                cover: getImage('train/hot-video-1.png'),
                title: '淘宝实战VIP基础班爆款',
                price: 1099,
                courseNum: 15,
                studyCount: 15,
            },
            {
                id: 2,
                cover: getImage('train/hot-video-1.png'),
                title: '淘宝实战VIP基础班爆款',
                price: 1099,
                courseNum: 15,
                studyCount: 15,
            },
        ],
        [
            {
                id: 3,
                cover: getImage('train/hot-video-1.png'),
                title: '淘宝实战VIP基础班爆款',
                price: 1099,
                courseNum: 15,
                studyCount: 15,
            },
            {
                id: 4,
                cover: getImage('train/hot-video-1.png'),
                title: '淘宝实战VIP基础班爆款',
                price: 1099,
                courseNum: 15,
                studyCount: 15,
            },
        ],
    ];
    const hotVideos2 = [
        {
            id: 1,
            cover: getImage('train/hot-video-2.png'),
            avatar: getImage('train/hot-video-2.png'),
            title: '淘宝VIP电商课程主图制作思',
            name: '笑笑',
            num: 15,
        },
        {
            id: 2,
            cover: getImage('train/hot-video-2.png'),
            avatar: getImage('train/hot-video-2.png'),
            title: '淘宝VIP电商课程主图制作思',
            name: '笑笑',
            num: 15,
        },
    ];

    // render
    return (
        <article className="Train">
            {/* header */}
            <Header title="直播课程" renderRight={() => <Icon name="icoxinxiaoxi" size={0.22} color="#494A4A" />} />
            {/* banner */}
            <div className="banner"></div>
            {/* notice */}
            <div className="flex-row notice">
                <Icon name="xiaoxi2" size={0.16} color="#CACCCB" />
                <span className="title">平台公告：</span>
                <span className="content line1">2020年春节期间客服及发货情况</span>
                <Icon name="right" size={0.16} color="#CACCCB" />
            </div>
            {/* navs */}
            <nav className="flex-row-between-center navs">
                {navs.map(nav => (
                    <div key={nav.title} className="flex-column-center-center nav">
                        <div
                            className="flex-row-center-center icon"
                            style={{ background: `linear-gradient(${nav.background[0]},${nav.background[1]})` }}>
                            <Icon name={nav.icon} size={0.2} color="white" />
                        </div>
                        <span className="title">{nav.title}</span>
                    </div>
                ))}
            </nav>
            {/* teachers */}
            <div className="flex-column teachers">
                {teachers.map(teacher => (
                    <div key={teacher.id} className="flex-row-start-center teacher">
                        <Icon name={teacher.icon} size={0.42} color="#666" />
                        <div className="center">
                            <span className="name">私教 : {teacher.name}老师</span>
                            <span className="title">{teacher.title}</span>
                            <div className="flex-row-start-center detail">
                                <span className="satisfaction">满意度</span>
                                <Icon name="lujing" size={0.12} color="#FFA01A" />
                                <span className="score">课程：</span>
                                <span className="couseCount">{teacher.couseCount}节</span>
                            </div>
                        </div>
                        <div className="flex-column buttons">
                            <span className="server">服务</span>
                            <span className="connect">联系</span>
                        </div>
                    </div>
                ))}
            </div>
            {/* 学习进度 */}
            <div className="process">
                <Title title="学习进度" subtitle="进入学习" subcolor="#494A4A" />
                <div className="flex-row-start-center paint">
                    <div className="flex-row flex1 line">
                        <span className="left" />
                        <span className="right" />
                        <span className="middle" />
                    </div>
                    <span className="score">60%</span>
                </div>
            </div>
            {/* middleline */}
            <div className="middleline" />
            {/* 热门课程 */}
            <div className="flex-column hotvideos">
                <Title title="热门课程" />
                {hotVideos.map(hotvideo => (
                    <div key={hotvideo.map(video => video.id).toString()} className="flex-row-between-center hotvideo">
                        {hotvideo.map(video => (
                            <ColumnVideo video={video} key={video.id} />
                        ))}
                    </div>
                ))}
            </div>
            {/* 热门课程2 */}
            <div className="flex-column hotvideos2">
                <Title title="热门课程" />
                <div className="hotvideo">
                    {hotVideos2.map(video => (
                        <RowVideo key={video.id} video={video} />
                    ))}
                </div>
            </div>
        </article>
    );
}
