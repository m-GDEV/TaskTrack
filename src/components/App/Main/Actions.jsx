import {
    StarIcon,
    ShareIcon,
    EllipsisHorizontalIcon,
    PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { AddTask } from "./AddX.jsx";

export function Button(props) {
    return (
        <button className="px-4 py-1 font-dm-sans rounded-lg text-[#AAADAF] hover:text-[#418CFD] hover:bg-[#E9F2FF] transition-all duration-200 cursor-pointer font-bold text-sm">
            {props.text}
        </button>
    );
}

export default function Actions({ data }) {
    return (
        <div className="flex flex-row mt-5 justify-between font-dm-sans">
            <div className="flex gap-8">
                <Button text="Board" />
                <Button text="Timeline" />
                <Button text="File" />
                <Button text="Report" />
            </div>
            <div className="flex gap-4 items-center">
                <AddTask data={data} />
                <StarIcon className="bg-white h-8 px-3 py-2 shadow-md rounded-md text-[#AAADAF] transition-all duration-200 hover:scale-105" />
                <ShareIcon className="bg-white h-8 px-3 py-2 shadow-md rounded-md text-[#AAADAF] transition-all duration-200 hover:scale-105" />
                <EllipsisHorizontalIcon className="bg-white h-8 px-3 py-2 shadow-md rounded-md text-[#AAADAF] transition-all duration-200 hover:scale-105" />
            </div>
        </div>
    );
}
