export default function Navbar() {
    return (
        <div className="flex flex-row border-2 border-4 border-gb mt-2 mx-2 justify-between">
            <h1 className="text-red-500 border-gb border-r-4 p-2">
                {" "}
                📝 TaskTrack{" "}
            </h1>
            <div className="flex flex-row gap-2 place-items-center">
                <div className="flex flex-row">
                    <h2> changelog </h2>
                    <h2> about </h2>
                </div>
                <div className="flex flex-row border-l-4 border-gb p-2">
                    <h2> login</h2>
                    <h2> register </h2>
                </div>
            </div>
        </div>
    );
}
