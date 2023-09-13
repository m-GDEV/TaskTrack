import Header from "../../components/App/Main/Header";
import Actions from "../../components/App/Main/Actions";
import TaskBoard from "../../components/App/Main/TaskBoard";
import Task from "../../components/App/Main/Task";

export default function Main(props) {
    const sections = props.data.sections;
    const tasks = props.data.tasks;

    return (
        <div className="flex flex-col w-full overflow-x-auto">
            <div className="pl-8 mr-6">
                <Header name={props.project} />
                <Actions data={props.data} />
            </div>
            <div className="bg-[#FAFBFB] h-full p-10 flex mt-4 gap-4 overflow-x-scrollbar scrollbar scrollbar-thumb-blue-900 scrollbar-track-slate-600">
                {sections.map((section) => {
                    let SectionTasks = [];
                    console.log(section);

                    for (let i = 0; i < tasks.length; i++) {
                        if (tasks[i].sectionId == section.id) {
                            SectionTasks.push(
                                <Task
                                    image={tasks[i].image}
                                    tag="default"
                                    title={tasks[i].name}
                                    subheading="Find more inspiration for the new design"
                                    comments="50"
                                    links="19"
                                    color={props.color}
                                />
                            );
                        }
                    }
                    return (
                        <TaskBoard title={section.name} section={section}>
                            {SectionTasks}
                        </TaskBoard>
                    );
                })}
            </div>
        </div>
    );
}
