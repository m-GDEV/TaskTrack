// light blue #E9F2FF
// button bg + text #418CFD

export default function SidebarItem(props) {
    return (
        <div className="flex flex-row gap-2 items-center font-cabin text-lg w-48 rounded-xl py-2 px-2 mr-6 text-[#AAADAF] hover:text-[#418CFD] hover:bg-[#E9F2FF] transition-all duration-200 cursor-pointer mb-2">
            {props.Icon}
            <p>{props.text}</p>
        </div>
    );
}
