import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../action/userAction';

export default function User() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(getUser());
    }, []);

    return (
        <div>
            {user.map(item => (
                <div key={item}>{item}</div>
            ))}
        </div>
    );
}
