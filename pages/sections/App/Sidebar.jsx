import {
    HomeIcon,
    InboxIcon,
    CalendarIcon,
    CogIcon,
    LogoutIcon,
} from "@heroicons/react/outline";
import Accordion from "../../components/App/Sidebar/Accordion";
import AccordionItem from "../../components/App/Sidebar/AccordionItem";
import SidebarItem from "../../components/App/Sidebar/SidebarItem";

export default function Sidebar() {
    return (
        <div className="flex flex-col pl-6 -mt-1 justify-between shadow-sm">
            <div className="flex flex-col gap-2 ">
                <hr className="h-1 bg-[#F4F6F8] border-none mb-4" />
                <div>
                    <SidebarItem
                        Icon={<InboxIcon className="h-6" />}
                        text="Inbox"
                    />
                    <SidebarItem
                        Icon={<HomeIcon className="h-6" />}
                        text="Today"
                    />
                    <SidebarItem
                        Icon={<CalendarIcon className="h-6" />}
                        text="Upcoming"
                    />
                </div>
                <div className="pl-3 ">
                    <Accordion title="Favourites">
                        <AccordionItem color="#FF0000" text="University" />
                        <AccordionItem color="#9629D6" text="Tech" />
                        <AccordionItem color="#0D4F8B" text="Personal" />
                    </Accordion>
                    <Accordion title="Projects">
                        <AccordionItem color="#FF0000" text="University" />
                        <AccordionItem color="#9629D6" text="Tech" />
                        <AccordionItem color="#0D4F8B" text="Personal" />
                        <AccordionItem color="#c1973e" text="Gaming" />
                        <AccordionItem color="#2fd09a" text="zMisc ." />
                    </Accordion>
                </div>
            </div>
            <div className="border-t-4 pt-6 border-[#F4F6F8] mb-4">
                <SidebarItem
                    Icon={<CogIcon className="h-6" />}
                    text="Settings"
                />
                <SidebarItem
                    Icon={<LogoutIcon className="h-6" />}
                    text="Logout"
                />
            </div>
        </div>
    );
}
