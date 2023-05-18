import classNames from 'classnames/bind';
import style from './HomePage.module.scss';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
import { Fragment } from 'react';
import Header from '../../component/Header';

const cx = classNames.bind(style);
function HomePage() {
    const user = useSelector(selectUser);
    // console.log('user from home page: ', user);
    return (
        <div className={cx('wrapper')}>
            {!user.data.token && (
                <Fragment>
                    <h1>Bạn cần đăng nhập để xem nội dung</h1>
                </Fragment>
            )}
            {user.data.token && <h1>Chọn các tab để chuyển hướng trang</h1>}
        </div>
    );
}

export default HomePage;
