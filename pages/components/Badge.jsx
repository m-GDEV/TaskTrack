export const Badge = (props) => {
    return (
        <div className="flex flex-row justify-start place-items-center px-4 py-4 bg-dp text-lp text-xl sm:text-[1.6rem] gap-2 rounded-2xl font-dm-sans mb-2 hover:scale-105 transition-all duration-300 hover:text-slp drop-shadow-lg">
            {props.Icon}
            <p>{props.text}</p>
        </div>
    );
};
