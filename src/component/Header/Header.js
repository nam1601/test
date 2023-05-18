import classNames from 'classnames/bind';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Image from '../Image/Image';
import MenuAccount from '../MenuAccount/MenuAccount';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/user/userSlice';
const cx = classNames.bind(style);
function Header({ ...props }) {
    const user = JSON.parse(localStorage.getItem('user')) || '';
    console.log('from header');
    return (
        <div className={cx('nav_bar')}>
            <nav>
                <ul className={cx('nav__list')}>
                    <li className={cx('nav__item')}>
                        <Link to="/list-user" className={cx('nav__item-content')}>
                            List user
                        </Link>
                    </li>
                    <li className={cx('nav__item')}>
                        <Link to="/article" className={cx('nav__item-content')}>
                            Article
                        </Link>
                    </li>
                </ul>
                {!user ? (
                    <div className={cx('nav__action')}>
                        <Button variant="contained">
                            <Link to="/login" className={cx('btn', 'btn-login')}>
                                Login
                            </Link>
                        </Button>
                        <Button>
                            <Link to="/register" className={cx('btn', 'btn-register')}>
                                Register
                            </Link>
                        </Button>
                    </div>
                ) : (
                    <MenuAccount user={user} />
                )}
                {/* {user.user ? (
                    <div className={cx('user__action')}>
                        <Image src={user.image} alt="avatar" className={cx('avatar')} />
                    </div>
                ) : (
                    
                )} */}
            </nav>
        </div>
    );
}

export default Header;
