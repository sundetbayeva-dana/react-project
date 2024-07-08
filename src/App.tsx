import React, {Suspense} from 'react';
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import './styles/index.scss'
import {useTheme} from "./themes/useTheme";
import {classNames} from "./helpers/classNames/classNames";



const App = () => {

    const {theme, toggleTheme} = useTheme()
    return (
        <div className={classNames('app' , {hovered: false, selected: true}, [theme, 'cls2', 'cls3'])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>Главная</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}>
                    </Route>
                    <Route path={'/'} element={<MainPageAsync/>}>
                    </Route>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;
