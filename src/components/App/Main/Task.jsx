import {
    ChatBubbleOvalLeftEllipsisIcon,
    LinkIcon,
    EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

import defaultProfilePic from "../../../../public/images/defaultProfileImage.png";

function lighten(color, luminosity) {
    // validate hex string
    color = new String(color).replace(/[^0-9a-f]/gi, "");
    if (color.length < 6) {
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
    }
    luminosity = luminosity || 0;

    // convert to decimal and change luminosity
    var newColor = "#",
        c,
        i,
        black = 0,
        white = 255;
    for (i = 0; i < 3; i++) {
        c = parseInt(color.substr(i * 2, 2), 16);
        c = Math.round(
            Math.min(Math.max(black, c + luminosity * white), white)
        ).toString(16);
        newColor += ("00" + c).substr(c.length);
    }
    return newColor;
}

export default function Task(props) {
    let LightBg = lighten(props.color, 0.25);
    let rstyle = {
        color: props.color,
        backgroundColor: LightBg,
    };

    return (
        <div className="bg-[#FFFEFE] rounded-lg mb-4 p-4 shadow-lg w-72">
            {props.image && (
                <Image
                    src={props.image}
                    className="max-w-full h-36 rounded-xl"
                    alt="Task Image"
                />
            )}
            <button
                className={`px-4 py-1 font-dm-sans rounded-lg  transition-all duration-200 cursor-pointer font-bold text-sm mt-3 hover:scale-105`}
                style={rstyle}
            >
                {props.tag}
            </button>
            <div className="flex justify-between mt-4">
                <h3 className="font-bold font-poppins break-normal">
                    {props.title}
                </h3>
                <EllipsisHorizontalIcon className="h-5" />
            </div>
            <p className="text-sm break-normal font-dm-sans text-[#AAADAF] mt-0.5">
                {props.subheading}
            </p>
            <div className="flex justify-between mt-4 text-[#AAADAF] text-sm items-center font-bold">
                <div className="flex">
                    <ChatBubbleOvalLeftEllipsisIcon className="h-5 mr-1" />
                    <p>{props.comments}</p>
                    <LinkIcon className="ml-2 h-5 mr-1" />
                    <p>{props.links}</p>
                </div>
                <Image
                    src={defaultProfilePic}
                    className="h-5"
                    alt="Default Profile Picture"
                    height="20"
                    width="20"
                />
            </div>
        </div>
    );
}
