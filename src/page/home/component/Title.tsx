import React from 'react';
import Icon from '../../../components/iconfont';
import './Title.scss';

export default function Title(props) {
    return (
        <div className="Home-C-Title flex-row-between-center">
            <span className="title">{props.title}</span>
            <div className="right flex-row-between-center">
                <span className="more" style={{ color: props.subcolor || '#cacccb' }}>
                    {props.subtitle || '更多'}
                </span>
                <Icon name="right" size={0.11} color={props.subcolor || '#CACCCB'} />
            </div>
        </div>
    );
}
