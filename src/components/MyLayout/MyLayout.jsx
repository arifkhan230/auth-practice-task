import { Outlet } from "react-router-dom";
import Navbar from "../Navigation/Navbar";


const MyLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MyLayout;