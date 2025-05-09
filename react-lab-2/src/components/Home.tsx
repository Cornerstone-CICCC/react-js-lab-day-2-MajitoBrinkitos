import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home () {
    const[fullName, setFullName] = useState('');
    const Navigate = useNavigate();

    return (
        <div className="grid grid-cols-3 gap-4 h-180 place-content-center text-black">
                <h1 className=" col-start-2 col-end-3 border border-black rounded-md p-8 flex justify-center align-content-center bg-pink-900 text-white">The Minimalist To-Do List</h1>
                
                <div className="col-start-2 col-end-3 border border-black rounded-md p-8 bg-amber-950 text-white">
                    <h2 className="flex justify-center align-content-center">Hello! What's your name?</h2>
                    <label htmlFor="fullName" className="grid col-start-2 col-end-3">
                        <input
                        id="fullName"
                        className=" bg-amber-900 my-5" 
                        type="text" 
                        value={fullName}
                        onChange={(e) =>setFullName(e.target.value)} />
                    </label>

                    <button 
                    type="button" 
                    className="w-25 col-start-2 border border-black rounded-md p-2 bg-orange-600 text-white"
                    onClick={() => Navigate("/login", { state: { fullName }} ) }
                    >
                    Login
                </button>
                </div>
        </div>
    );
}

export default Home 