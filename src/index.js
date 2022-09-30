import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import SideBar from "./component/SideBar"
import App from "./App";
import BoardProvider from "./provider/BoardProvider";
import Boards from "./routes/Boards";
import BoardDetail from "./routes/BoardDetail";
import './style.css'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <BoardProvider>
            <SideBar />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="boards" element={<Boards />} />
                <Route path="boards/id/:id" element={<BoardDetail />} />
                <Route path="*" element={<App />}/>
            </Routes>
        </BoardProvider>
    </BrowserRouter>
);