import React from 'react';
import './RowVideo.scss';

export default function RowVideo(props) {
    const { video = {} } = props;
    return (
        <article className="flex-row-start-center Train-RowVideo">
            <div className="flex1 flex-column content">
                <div className="flex-row-start-center top">
                    <span className="hot">hot</span>
                    <span className="line1 title">{video.title}</span>
                </div>
                <div className="flex-row-between-center bottom">
                    <div className="flex-row-start-center">
                        <img src={video.avatar} className="avatar" />
                        <span className="name">{video.name}</span>
                    </div>
                    <span className="viewNum">{video.num}人观看</span>
                </div>
            </div>
            <img src={video.cover} className="cover" />
        </article>
    );
}
