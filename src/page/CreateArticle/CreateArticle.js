import classNames from 'classnames/bind';

import { Formik } from 'formik';
import { createArticle } from '../../features/article/articleSlice';
import style from './CreateArticle.module.scss';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(style);
function CreateArticle() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    return (
        <div className={cx('wrapper')}>
            <h1>Create CreateArticle</h1>
            <Formik
                initialValues={{ title: '', description: '', body: '', tagList: [] }}
                // validate={(values) => {
                //     const errors = {};
                //     if (!values.email) {
                //         errors.email = 'Required';
                //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                //         errors.email = 'Invalid email address';
                //     }
                //     return errors;
                // }}
                onSubmit={async (values, { setSubmitting }) => {
                    // console.log(values);
                    values.token = user.token;
                    dispatch(createArticle(values));
                    // console.log(values);
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
                        <label htmlFor="title">Username</label>
                        <input
                            id="title"
                            type="text"
                            name="title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                            placeholder="Title"
                        />
                        <label htmlFor="description">Description</label>
                        <input
                            id="description"
                            type="text"
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            placeholder="Write something"
                        />
                        {errors.email && touched.email && errors.email}
                        <label htmlFor="body">Body</label>
                        <input
                            id="body"
                            type="text"
                            name="body"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.body}
                            spellCheck={false}
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

export default CreateArticle;
