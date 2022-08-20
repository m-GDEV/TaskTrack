import { useState } from "react";
import { ChevronUpIcon } from "@heroicons/react/outline";

export default function Accordion(props) {
    const [open, setOpen] = useState(false);

    const toggle = open == false ? "max-h-96" : "max-h-0";
    const rotate = open == false ? "" : "rotate-180";

    return (
        <div className="font-cabin mb-2">
            <p
                onClick={() => setOpen(!open)}
                className="text-gray-900 text-lg flex flex-row items-center gap-2 cursor-pointer mb-2"
            >
                <ChevronUpIcon
                    className={`h-4 transition-all duration-300 ` + rotate}
                />
                {props.title}
            </p>
            <div
                className={`${toggle} transition-all duration-300 overflow-hidden`}
            >
                {props.children}
            </div>
        </div>
    );
}
