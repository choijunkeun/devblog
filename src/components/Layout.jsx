import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

import styles from './Layout.module.css'
import { Routes, Route } from "react-router-dom";
import Archive from "./archive/Archive";
import PostDetail from "./archive/PostDetail";
import PostWrite from "./archive/PostWrite";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
                <div className={styles.centerWrap}>
                <Navbar />
                <Routes>
                <Route path="/" element={ <div>첫 화면</div>} />
                <Route path="/posts" element={ <Archive />} />
                <Route path="/:idx" element={ <PostDetail/> } />
                <Route path="/write" element={ <PostWrite /> }/>
                </Routes>
                </div>
        </>
    );
};
export default Layout;
