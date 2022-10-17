import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";

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
                <EllipsisHorizontalIcon className="h-5" />
            </div>
            <div className="overflow-y-auto h-[57vh] scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-slate-600 pr-4 mt-3">
                {props.children}
            </div>
        </div>
    );
}
