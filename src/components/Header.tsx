import React from 'react';
import './Header.scss';

export default function Header(props) {
    return (
        <div className="Component-Header flex-row-start-center">
            <div className="flex1"></div>
            <span className="title">{props.title}</span>
            <div className="flex-row flex1">
                <div className="flex1" />
                {props.renderRight && props.renderRight()}
            </div>
        </div>
    );
}
