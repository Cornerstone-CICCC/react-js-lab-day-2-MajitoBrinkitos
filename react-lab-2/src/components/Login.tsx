import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Task from './Task';

function Login () {
    const location = useLocation();
    const fullName = location.state?.fullName || "Guest";
    const Navigate = useNavigate();

    return (
        <div className="grid grid-cols-3 gap-4 h-180 place-content-center text-black">
            <div className="col-start-2 col-end-3 border border-black rounded-md p-8 flex flex-col justify-center align-content-center bg-pink-900 text-white">
                <h2>Welcome, { fullName }!!! </h2>
                <p className="py-3">Let's start planning your day</p>
            </div>

                {/*Task Component: Contains the To-Do logic */}
                <Task />

            <button 
                type="button" 
                className="col-start-2 w-25 border border-black rounded-md p-2  bg-orange-600 text-white"
                onClick={() => Navigate("/") }
                >
                Logout
            </button>
        </div>
    );
}

export default Login