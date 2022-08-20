import Circle from "./Circle";

export default function AccordionItem(props) {
    return (
        <div
            className={`flex flex-row items-center gap-4 text-dm-sans text-base cursor-pointer`}
        >
            <Circle height="12px" width="12px" color={props.color} />
            <p className="text-[#AAADAF] hover:text-[#666869]">{props.text}</p>
        </div>
    );
}
