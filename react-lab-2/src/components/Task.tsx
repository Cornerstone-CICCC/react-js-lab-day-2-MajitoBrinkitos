function Task() {
    return (
        <div className="grid grid-cols-3 gap-4 col-start-2 bg-orange-100 text-black p-4 rounded-md">
            <h1 className="col-span-3 col-start-1 flex justify-center">Tasks</h1>
            <label htmlFor="task">
                <input name="text" defaultValue="Enter a new text" />
            </label>
        </div>
    );
}

export default Task