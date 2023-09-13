import { FolderPlusIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";

// get project name from user
// ask for color with coulour picker from cwm
// ask if favourite? maybe just let them do it later
// generate unique id for project name including its name and a timestamp
// write it firebase
// close dialog element on submit
//
//
// WHEN CREATING NEW TASK
// make sure to match it with current section id
// make sure to match it with current project id
// give option to set done by and due dates
// generate id based on name and timestamp
//
// WHEN CREATING NEW SECTION
// make sure project id matches current project
// make sure to create id with name a timestamp
//
// ----------------------- !!!!!! COMMENT THIS SHIT FUCKTARD !!!!!!!!!!!!!!!!!------------------

export function Dialog({ children, isOpen }) {
    return (
        <div>
            <dialog className="p-0" open={isOpen}>
                {children}
            </dialog>
        </div>
    );
}

function generateUniqueId(name) {
    // Create unique project id using timestamp, random chars, and the name
    const timestamp = Date.now().toString();
    const randomString = Math.random().toString(36).substr(2, 10);
    const id = name.slice(0, 5) + timestamp + randomString;
    return id.slice(0, 20);
}

export function AddProject({ data }) {
    const [open, setOpen] = useState(false);
    const [projectName, setProjectName] = useState("");
    const [color, setColor] = useState("");

    function writeProject(projectName, color) {
        const projectId = generateUniqueId(projectName);
        const userId = data.info.uid;

        const db = getDatabase();
        set(ref(db, "users/" + userId + "/projects/" + projectId), {
            color: color,
            favourite: false,
            id: projectId,
            name: projectName,
        });
    }

    return (
        <div>
            <button
                onClick={() => {
                    setOpen(!open);
                }}
            >
                <FolderPlusIcon className="w-6 mr-2 text-dib hover:text-cb hover:scale-125 rounded transition-all duration-200 font-bold" />
            </button>
            <Dialog isOpen={open}>
                <div className="rounded-lg bg-gray-200 border-4 border-gray-600 p-6">
                    <p className="text-4xl text-lb font-cabin mb-6">
                        New Project
                    </p>
                    <div className="flex flex-row gap-3 justify-between">
                        <div className="flex flex-col">
                            <span>Project Name</span>
                            <input
                                value={projectName}
                                onChange={(e) => setProjectName(e.target.value)}
                                className="rounded"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span>Project Color</span>
                            <input
                                value={color}
                                onChange={(e) => setColor(e.target.value)}
                                type="color"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between mt-10">
                        <button
                            onClick={() => {
                                writeProject(projectName, color);
                                setOpen(false);
                            }}
                            className="p-3 rounded-lg bg-cb text-white text-xl"
                        >
                            Create
                        </button>
                        <button
                            className="p-3 rounded-lg bg-gray-400 text-black text-lg"
                            onClick={() => {
                                setOpen(false);
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </Dialog>
        </div>
    );
}

export function AddTask({ data }) {
    const [taskName, setTaskName] = useState("");

    function writeTask(taskName) {
        const taskId = generateUniqueId(taskId);
        const userId = data.info.uid;

        const db = getDatabase();
        set(ref(db, "users/" + userId + "/projects/" + projectId), {
            color: color,
            favourite: false,
            id: projectId,
            name: projectName,
        });
    }

    return (
        <details>
            <summary className="font-cabin text-lw bg-[#418CFD] hover:bg-white flex py-2 px-3 rounded-lg hover:text-[#418CFD] hover:border-2 hover:border-[#418CFD] hover:text-white border-2 border-[#418CFD] transition-all duration-200 group">
                <PlusCircleIcon className="w-6 mr-2 text-lw group-hover:text-[#418CFD] rounded transition-all duration-200 font-bold" />
                Add New Task
            </summary>
            <div></div>
        </details>
    );
}

// THIS I WANT TO DO FOR THIS PROJECT RELATIVELY SOON
// finish core functionality
//     - adding projects, sections, tasks
//     - deleting projects, sections, tasks
// dark mode
// settings panel
// inbox and upcoming pages
//     - for inbox just make it a project called inbox
// maybe search functionality using thing on cwm
