// bg FFFEFE
// button bg + text 418CFD
// highlighted bg E9F2FF
// light gray F4F6F8
// darker gray AAADAF
import Navbar from "../sections/App/Navbar.jsx";
import Sidebar from "../sections/App/Sidebar.jsx";
import Main from "../sections/App/Main.jsx";

export default function App() {
    return (
        <div className="bg-[#FFFEFE] h-screen overflow-x-hidden flex flex-col">
            <Navbar />
            <div className="flex flex-row grow w-full">
                <Sidebar />
                <Main />
            </div>
        </div>
    );
}
