import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Image from '../../component/Image/Image';
import * as service from '../../services/services';
import style from './UserDetail.module.scss';
const cx = classNames.bind(style);
function UserDetail() {
    const [userDetail, setUserDetail] = useState({});
    const location = useLocation();
    console.log(location.pathname.slice(6));
    useEffect(() => {
        const fetchData = async () => {
            const res = await service.getUserDetail(location.pathname.slice(6));
            setUserDetail(res.profile);
        };
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('user-block')}>
                <div className={cx('avatar')}>
                    <Image src={userDetail.Image} alt="avatar" />
                </div>
                <div className={cx('info')}>
                    <div className={cx('info-field')}>
                        <label htmlFor="userName">User name</label>
                        <input
                            type="text"
                            // className="form-control"
                            id="userName"
                            placeholder="Username"
                            name="username"
                            value={userDetail.username}
                        />
                    </div>

                    <div className={cx('info-field')}>
                        <label htmlFor="bio">Bio</label>
                        <input
                            type="text"
                            // className="form-control"

                            name="bio"
                            placeholder="Something"
                            value={userDetail.bio}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserDetail;
