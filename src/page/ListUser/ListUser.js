import { useEffect, useState } from 'react';
import * as service from '../../services/services';
import classNames from 'classnames/bind';
import style from './ListUser.module.scss';

import Image from '../../component/Image/Image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);
function ListUser() {
    const [list, setList] = useState([]);
    const token = JSON.parse(localStorage.getItem('user')).token || '';
    useEffect(() => {
        const fetchList = async () => {
            const res = await service.getListUser(token);
            setList(res);
        };
        fetchList();
    }, []);
    return (
        <div className={cx('wrapper')}>
            <table id={cx('customers')}>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Avatar</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((user, index) => (
                        <tr key={index}>
                            <td>
                                <Link to={`/user/${user.username}`} className={cx('btn')}>
                                    {user.username}
                                </Link>
                            </td>
                            <td>
                                <Image src={user.image} className={cx('avatar')} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListUser;
