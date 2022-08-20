import { DotsHorizontalIcon } from "@heroicons/react/outline";
import Task from "./Task";

export default function TaskBoard(props) {
    return (
        <div className="flex flex-col">
            <div
                className="flex justify-between gap-32 border-b-[3px]"
                style={{ borderColor: props.color }}
            >
                <div className="flex items-center gap-4">
                    <h1 className="font-poppins font-bold">{props.title}</h1>
                    <p className="font-dm-sans text-sm font-bold text-[#AAADAF]">
                        {props.tasks}
                    </p>
                </div>
                <DotsHorizontalIcon className="h-5" />
            </div>
            <div className="overflow-y-auto h-[57vh] scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-slate-600 pr-4 mt-3">
                <Task
                    image="https://preview.redd.it/6eoud7lwiq951.jpg?auto=webp&s=7c938cefdc74be9c2ea069a6de7802638722894b"
                    tag="Research"
                    title="Moodboard new design"
                    subheading="Find more inspiration for the new design"
                    comments="50"
                    links="19"
                    color={props.color}
                />
                <Task
                    image="https://preview.redd.it/6eoud7lwiq951.jpg?auto=webp&s=7c938cefdc74be9c2ea069a6de7802638722894b"
                    tag="Research"
                    title="Moodboard new design"
                    subheading="Find more inspiration for the new design"
                    comments="50"
                    links="19"
                    color={props.color}
                />
                <Task
                    image="https://preview.redd.it/6eoud7lwiq951.jpg?auto=webp&s=7c938cefdc74be9c2ea069a6de7802638722894b"
                    tag="Research"
                    title="Moodboard new design"
                    subheading="Find more inspiration for the new design"
                    comments="50"
                    links="19"
                    color={props.color}
                />
            </div>
        </div>
    );
}
