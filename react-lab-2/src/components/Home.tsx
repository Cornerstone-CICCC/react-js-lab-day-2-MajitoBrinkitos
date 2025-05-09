const Home = () => {
    return (
        <div className="grid grid-cols-3 gap-4 h-180 place-content-center text-black">
                <h1 className=" col-start-2 col-end-3 border border-black rounded-md p-8 flex justify-center align-content-center bg-pink-900 text-white">The Minimalist To Do List</h1>
                <div className="col-start-2 col-end-3 border border-black rounded-md p-8 bg-amber-950 text-white">
                    <h2 className="flex justify-center align-content-center">Hello! What's your name?</h2>
                    <label className="grid col-start-2 col-end-3">
                        <input className="flex justify-content-center" type="text" name="full name" />
                    </label>
                </div>
        </div>
    );
}

export default Home 