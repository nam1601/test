import classNames from 'classnames/bind';
import style from './Register.module.scss';

import * as service from '../../services/services';
import { Field, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../features/user/userSlice';
// import { loginFailure, loginRequest, loginSuccess, selectUser } from '../../features/user/userSlice';
const cx = classNames.bind(style);
function Register() {
    // const user = useSelector(selectUser);
    // const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <div className={cx('wrapper')}>
            <h1>Register</h1>
            <Formik
                initialValues={{ username: '', email: '', password: '' }}
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
                // }}
                onSubmit={async (values, { setSubmitting }) => {
                    await dispatch(registerUser(values));
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
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            placeholder="Your name"
                        />
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
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
}

export default Register;
