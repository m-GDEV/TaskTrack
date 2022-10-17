import {
    MoonIcon,
    SunIcon,
    ChevronDownIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function AppNavbar(props) {
    return (
        <div className="flex flex-row justify-between items-end mt-6 mx-6">
            <div className="flex flex-row items-center">
                <Link href="/">
                    <a className="font-carter-one text-[#418CFD] text-3xl pb-6 flex">
                        📝 <nobr>tasktrack</nobr>
                    </a>
                </Link>
            </div>
            <div
                className="flex flex-row justify-between ml-[4.5rem] w-full border-b-4 pb-6 border-[#F4F6F8]"
                onLoad={console.log()}
            >
                <div className="flex flex-row items-center bg-[#F4F6F8] px-4 py-4 text-[#AAADAF] rounded-2xl">
                    <MagnifyingGlassIcon className="h-6 " />
                    <input
                        type="search"
                        placeholder="Search..."
                        className="text-lg bg-[#F4F6F8] outline-none"
                    />
                </div>
                <div className="flex flex-row gap-4 items-center">
                    {/* Darkmode toggle*/}
                    <div className="bg-[#F4F6F8] flex flex-row justify-between text-[#AAADAF] rounded-full items-center py-0.5 px-0.5">
                        <SunIcon className="w-[2.15rem] h-[2.15rem] hover:bg-[#FFFEFE] rounded-full px-1 transition-all duration-300" />
                        <MoonIcon className="w-[2.15rem] h-[2.15rem] hover:bg-[#FFFEFE] rounded-full px-1 transition-all duration-300" />
                    </div>
                    <div className="flex flex-row items-center py-2.5 px-3 rounded-2xl text-[#AAADAF] hover:text-[#808283] font-bold transition-all duration-300 cursor-pointer">
                        <img
                            src={props.data.info.profileImage}
                            className="h-10 border-[#418cfd] border-2 rounded-full p-0.5"
                        />
                        <p className="ml-2">{props.data.info.name}</p>
                        <ChevronDownIcon className="h-7 ml-2" />
                    </div>
                </div>
            </div>
        </div>
    );
}
