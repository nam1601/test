import { useEffect, useState } from 'react';
import * as service from '../../services/services';
import classNames from 'classnames/bind';
import style from './ArticlePage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles, selectArticles } from '../../features/article/articleSlice';
import Image from '../../component/Image/Image';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const cx = classNames.bind(style);
function ArticlePage() {
    // const [articles, setArticles] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const articles = useSelector(selectArticles).data;
    console.log(articles);
    const handleTime = (article) => {
        const date = new Date(article.created);
        const time = date.toLocaleTimeString();
        return time;
    };
    useEffect(() => {
        dispatch(fetchArticles());
    }, [dispatch]);
    return (
        <div className={cx('wrapper')}>
            <Link to="/create-article">
                <Button variant="contained" fontSize="large" className={cx('create')}>
                    Create Article
                </Button>
            </Link>
            <div className={cx('post-wrapper')}>
                {articles.map((article) => (
                    <div className={cx('post')} key={article.id}>
                        <div className={cx('post-block')}>
                            <div className={cx('author')}>
                                <Image src={article.author.image} alt="avatar" className={cx('avatar')} />
                                <div className={cx('info')}>
                                    <h3>{article.author.username}</h3>
                                    <span>{handleTime(article)}</span>
                                </div>
                            </div>
                            <div className={cx('content')}>
                                <h3>
                                    {article.title}: <span>{article.description}</span>
                                </h3>
                                {/* <span>{article.body}</span> */}
                                <p>{article.body}</p>
                            </div>
                        </div>
                        <div className={cx('interact')}>
                            <div className={cx('like')}>
                                <FavoriteIcon className={cx('like__icon')} fontSize="large" />
                                {article.favoriteCount}
                            </div>
                            <div className={cx('comment')}>
                                <ModeCommentIcon className={cx('comment__icon')} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ArticlePage;
