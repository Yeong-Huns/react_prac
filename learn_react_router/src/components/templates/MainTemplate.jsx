import {NavBar} from "../organism/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home.jsx";
import About from "../../pages/About.jsx";
import Contact from "../../pages/Contact.jsx";
import {ButtonBar} from "../organism/ButtonBar.jsx";
import {LocationHome} from "../../pages/LocationHome.jsx";
import {LocationUser} from "../../pages/LocationUser.jsx";
import {LocationSearch} from "../../pages/LocationSearch.jsx";

export const MainTemplate = () => {
    return (
        <main className={'container max-w-lg mx-auto p-4'}>
            <NavBar/>
            <ButtonBar/>
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={'home'} element={<LocationHome/>}/>
                    <Route path={'user/:id'} element={<LocationUser/>}/>
                    <Route path={'search'} element={<LocationSearch/>}/>
                </Route>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
                <Route path={'*'} element={<h2 className={'text-8xl'}>잘못된 URL</h2>}/>
            </Routes>
        </main>
    )
}