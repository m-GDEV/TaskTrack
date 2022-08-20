import AppNavbar from "./sections/App/AppNavbar.jsx";
import Sidebar from "./sections/App/Sidebar.jsx";
import Main from "./sections/App/Main.jsx";

export default function App() {
    return (
        <div className="bg-[#FFFEFE] h-screen overflow-x-hidden flex flex-col">
            <AppNavbar />
            <div className="flex flex-row grow w-full">
                <Sidebar />
                <Main />
            </div>
        </div>
    );
}
