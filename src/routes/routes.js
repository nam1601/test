import config from '../config';
import Home from '../page/Home/HomePage';
import Profile from '../page/Profile/ProfilePage';
import Login from '../page/Login/LoginPage';
import Article from '../page/Article/ArticlePage';
import RegisterPage from '../page/Register/RegisterPage';
import ListUser from '../page/ListUser/ListUser';
import CreateArticle from '../page/CreateArticle/CreateArticle';
import UserDetail from '../page/UserDetail/UserDetail';
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.login,
        component: Login,
    },
    {
        path: config.routes.article,
        component: Article,
    },
    {
        path: config.routes.register,
        component: RegisterPage,
    },
    {
        path: config.routes.list,
        component: ListUser,
    },
    {
        path: config.routes.create,
        component: CreateArticle,
    },
    {
        path: config.routes.user,
        component: UserDetail,
    },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
