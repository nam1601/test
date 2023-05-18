import classNames from 'classnames/bind';
import style from './Profile.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, updateUser } from '../../features/user/userSlice';
import { useEffect, useState } from 'react';

import * as service from '../../services/services';
import Image from '../../component/Image/Image';
import noneImage from '../../assets/images/no-image.png';
import noImage from '../../assets/images/index';
import { Button } from '@mui/material';
import { Box } from '@mui/material';
import { Formik } from 'formik';
const cx = classNames.bind(style);
const initial = { username: '', email: '', image: '', bio: '', token: '' };
function ProfilePage() {
    // const user = useSelector(selectUser);
    const user = JSON.parse(localStorage.getItem('user'));
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const initialUser = useSelector(selectUser);

    const [formValue, setFormValue] = useState({ ...initialUser.data });
    const dispatch = useDispatch();
    // useEffect(() => {
    //     const fetchInfo = async () => {
    //         const res = await service.getUserInfo(user.token);
    //         // console.log('res: ', res);
    //         // setFormValue(res.user);
    //         // console.log('form value: ', formValue);
    //     };
    //     fetchInfo();
    // }, []);

    useEffect(() => {
        if (selectedImage) {
            setImageUrl(URL.createObjectURL(selectedImage));
        }
    }, [selectedImage]);
    const handleChange = (e) => {
        const value = e.target.value;
        const keyName = e.target.name;
        let a = { ...formValue };
        a[keyName] = value;
        console.log(a);
        setFormValue(a);
    };
    const handleChangeImage = (e) => {
        setSelectedImage(e.target.files[0]);

        const value = URL.createObjectURL(e.target.files[0]);
        const keyName = e.target.name;
        let a = { ...formValue };
        a[keyName] = value;
        console.log(a);
        setFormValue(a);
    };
    const handleSubmit = (e) => {
        console.log(formValue);
        dispatch(updateUser(formValue));
        window.location.reload();
        // e.preventDefault();
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}> Edit user</div>
            <form onSubmit={handleSubmit}>
                <div className={cx('avatar')}>
                    {!imageUrl && !selectedImage && (
                        <div className={cx('avatar')}>
                            <Image src={user.image} />
                        </div>
                    )}
                    {imageUrl && selectedImage && (
                        <Box mt={2} textAlign="center">
                            <img src={imageUrl} alt={selectedImage.name} height="100px" />
                        </Box>
                    )}
                    <label htmlFor="select-image">
                        <Button variant="contained" color="primary" component="span" className={cx('add-btn')}>
                            Upload Image
                        </Button>
                    </label>
                    <input
                        accept="image/*"
                        type="file"
                        id="select-image"
                        name="image"
                        style={{ display: 'none' }}
                        onChange={handleChangeImage}
                    />
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
                            value={formValue.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={cx('info-field')}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            // className="form-control"

                            id="email"
                            placeholder="Email"
                            name="email"
                            value={formValue.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className={cx('info-field')}>
                        <label htmlFor="bio">Bio</label>
                        <input
                            type="text"
                            // className="form-control"

                            name="bio"
                            placeholder="Something"
                            value={formValue.bio}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className={cx('btn')}>
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ProfilePage;
