import { useState } from 'react'

function Task() {
    const [task, setTask] = useState([]);
    const [taskText, setTaskText] = useState('');

    {/*Add Task Functionality */}
    return (
        <div className="grid grid-cols-3 gap-4 col-start-2 bg-orange-100 text-black p-4 rounded-md">
            <h1 className="col-span-3 flex justify-center">Tasks</h1>

            <div className="col-span-3 flex items-center space-x-4 border border-black p-4 rounded-md">
                <label htmlFor="task" className="w-3/4">
                    <input className="w-full p-2 border border-gray-400 rounded-md" name="text" defaultValue="Enter a new task" />
                </label>
                <button type="button" className="px-4 py-2 border border-black rounded-md">
                    Add Task
                </button>
            </div>
        </div>
    );
}

export default Task;
