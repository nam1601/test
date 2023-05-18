import classNames from 'classnames/bind';
import style from './Login.module.scss';

import * as service from '../../services/services';
import { Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../../features/user/userSlice';
import { Link, Redirect, useNavigate } from 'react-router-dom';
import { useState } from 'react';
const cx = classNames.bind(style);
function Login() {
    const user = useSelector(selectUser);
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className={cx('wrapper')}>
            <h1>Register</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={(values) => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                // onSubmit={async (values, { setSubmitting }) => {
                //     let user = await service.Register(values.username, values.email, values.password);
                //     // let token = await service.Login(values.email, values.password);
                //     setSubmitting(false);
                // dispatch(loginRequest());
                // let data = await service.Login(values.email, values.password);
                // if (typeof data === 'string') {
                //     dispatch(loginFailure(data));
                // } else {
                //     dispatch(loginSuccess(data));
                //     localStorage.setItem('user', JSON.stringify(data.user));
                // }
                // setSubmitting(false);
                // console.log('data from login: ', data);
                // navigate('/');
                // }}
                onSubmit={async (values, { setSubmitting }) => {
                    await dispatch(login(values));
                    setSubmitting(false);
                    navigate('/list-user');
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit} className={cx('form-control')} method="POST">
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                            placeholder="Username@email.com"
                        />
                        {errors.email && touched.email && errors.email}
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                            placeholder="Password"
                        />
                        {errors.password && touched.password && errors.password}
                        <button className={cx('btn-submit')} type="submit" disabled={isSubmitting}>
                            {/* <Link to="/">Submit</Link> */}
                            Submit
                        </button>
                        {}
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default Login;
