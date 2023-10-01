import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col space-y-4 justify-center items-center">
            <h2 className="text-7xl">Error!!!</h2>
            <p className="text-2xl">Page not found</p>
            <Link to='/'><button className="btn btn-secondary">Home</button></Link>
        </div>
    );
};

export default ErrorPage;