export default function Header(props) {
    return (
        <div className="flex flex-row mt-4 font-dm-sans items-center justify-between">
            <div>
                <h1 className="text-4xl font-poppins font-bold">
                    {props.name}
                </h1>
                <p className="mt-2 text-lg text-[#AAADAF]">
                    Create furniture website using the guide that has been
                    prepared
                </p>
            </div>
            <div className="flex flex-row items-center gap-4">
                <p className="font-bold">Members</p>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3237/3237472.png"
                    className="h-8"
                />
            </div>
        </div>
    );
}
