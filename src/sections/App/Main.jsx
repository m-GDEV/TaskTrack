import Header from "../../components/App/Main/Header";
import Actions from "../../components/App/Main/Actions";
import TaskBoard from "../../components/App/Main/TaskBoard";
import Task from "../../components/App/Main/Task";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Main(props) {
    const [projects, setProjects] = useState(props.data.projects);
    const [sections, setSections] = useState(props.data.sections);
    const [tasks, setTasks] = useState(props.data.tasks);

    const givenProjectId = props.projectId;
    const [projectName, setProjectName] = useState("Invalid Project!");
    const [invalidProject, setInvalidProject] = useState(true);
    const router = useRouter();

    function updateProjectValidity(projects, givenProjectId) {
        let matchedName = false;

        Object.keys(projects).map((key) => {
            const project = projects[key];

            if (project.id == givenProjectId) {
                setProjectName(project.name);
                setInvalidProject(false);
                console.log("could match name");
                matchedName = true;
            }
        });

        // Handles case where user routes to invalid project in App
        // without this it would just do nothing
        if (!matchedName) {
            setProjectName("Invalid Project!");
            setInvalidProject(true);
        }
    }
    // On page load
    useEffect(() => {
        updateProjectValidity(projects, givenProjectId);
        console.log(router.query);
    }, []);

    // Handles case where user changes their selected project on the sidebar
    useEffect(() => {
        updateProjectValidity(projects, givenProjectId);
    }, [router.query]);

    if (invalidProject) {
        return (
            <div className="flex flex-col w-full overflow-x-auto">
                <div className="pl-8 mr-6">
                    <Header name={projectName} />
                    <div className="bg-[#FAFBFB] h-full p-10 flex mt-4 gap-4 overflow-x-scrollbar scrollbar scrollbar-thumb-blue-900 scrollbar-track-slate-600">
                        <h1>
                            Click on any project on the sidebar to switch to a
                            valid project! Or add a new project by clicking the
                            folder icon with the plus symbol!
                        </h1>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col w-full overflow-x-auto">
                <div className="pl-8 mr-6">
                    <Header name={projectName} />
                    <Actions data={props.data} />
                </div>
                <div className="bg-[#FAFBFB] h-full p-10 flex mt-4 gap-4 overflow-x-scrollbar scrollbar scrollbar-thumb-blue-900 scrollbar-track-slate-600">
                    {sections.map((section) => {
                        let SectionTasks = [];

                        for (let i = 0; i < tasks.length; i++) {
                            // Checks if task's associated project is the same as the
                            // selected project. This logic is likely flawed and incomplete
                            // Change this later.
                            if (
                                tasks[i].projectId == givenProjectId &&
                                tasks[i].sectionId == section.id
                            ) {
                                SectionTasks.push(
                                    <Task
                                        image={tasks[i].image}
                                        tag="default"
                                        title={tasks[i].name}
                                        subheading="Find more inspiration for the new design"
                                        comments="50"
                                        links="19"
                                        color={props.color}
                                        key={tasks[i].name + i}
                                    />
                                );
                            }
                        }
                        return (
                            <TaskBoard
                                title={section.name}
                                section={section}
                                key={section.name}
                            >
                                {SectionTasks}
                            </TaskBoard>
                        );
                    })}
                </div>
            </div>
        );
    }
}
