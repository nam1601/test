// import React from 'react';
import './App.css';
import Button from '@mui/material/Button';
import { Routes, BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import { Fragment, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/user/userSlice';

import Header from './component/Header/Header';
function App() {
    const user = useSelector(selectUser);

    return (
        <div className="App">
            <Router>
                <Header user={user.data} />
                <div className="App">
                    <Routes>
                        {publicRoutes.map((publicRoute, index) => {
                            const Page = publicRoute.component;
                            return (
                                <Route
                                    key={index}
                                    path={publicRoute.path}
                                    element={
                                        <Fragment>
                                            <Page />
                                        </Fragment>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
