import React from 'react';
import './ColumnVideo.scss';

export default function ColumnVideo(props) {
    const video = props.video || {};
    return (
        <article className="flex-column Train-ColumnVideo">
            <img src={video.cover} className="img" />
            <span className="line1 title">{video.title}</span>
            <div className="flex-row-between-center describe">
                <div className="flex-row-start-center">
                    <span className="price">¥ {video.price}元</span>
                    <span className="studyCount">/</span>
                    <span className="courseNum">{video.courseNum}课</span>
                </div>
                <span className="studyCount">{video.studyCount}人学习</span>
            </div>
        </article>
    );
}
