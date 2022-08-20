import Header from "../../components/App/Main/Header";
import Actions from "../../components/App/Main/Actions";
import TaskBoard from "../../components/App/Main/TaskBoard";

export default function Main() {
    return (
        <div className="flex flex-col w-full overflow-x-auto">
            <div className="pl-8 mr-6">
                <Header />
                <Actions />
            </div>
            <div className="bg-[#FAFBFB] h-full p-10 flex mt-4 gap-4 overflow-x-scrollbar scrollbar scrollbar-thumb-blue-900 scrollbar-track-slate-600">
                <TaskBoard color="#FAF" title="To Do" tasks="4" />
                <TaskBoard color="#2B67DD" title="To Do" tasks="4" />
                <TaskBoard color="#FAF" title="To Do" tasks="4" />
                <TaskBoard color="#FAF" title="To Do" tasks="4" />
                <TaskBoard color="#FAF" title="To Do" tasks="4" />
                <TaskBoard color="#FAF" title="To Do" tasks="4" />
                <TaskBoard color="#FAF" title="To Do" tasks="4" />
                <TaskBoard color="#FAF" title="To Do" tasks="4" />
            </div>
        </div>
    );
}
