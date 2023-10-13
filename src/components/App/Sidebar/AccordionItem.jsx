import Circle from "./Circle";
import Link from "next/link";

export default function AccordionItem(props) {
    return (
        <div
            className={`flex flex-row items-center gap-4 text-dm-sans text-base cursor-pointer`}
        >
            <Circle height="12px" width="12px" color={props.color} />
            <Link href={"/app/" + props.text}>
                <a className="text-[#AAADAF] hover:text-[#666869]">
                    {props.text}
                </a>
            </Link>
        </div>
    );
}
