import {NavBar} from "../organism/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "../../pages/Home.jsx";
import About from "../../pages/About.jsx";
import Contact from "../../pages/Contact.jsx";

export const MainTemplate = () => {
    return (
        <main className={'container max-w-lg mx-auto p-4'}>
            <NavBar/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/about'} element={<About/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
            </Routes>
        </main>
    )
}