import React from 'react';
import Posts from "./components/Posts";
import './assets/App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PostPage from "./components/PostPage";

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/post/" element={<PostPage></PostPage>}/>
                <Route path="/task-picasso" element={<Posts></Posts>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;