import {
    HomeIcon,
    InboxIcon,
    CalendarIcon,
    CogIcon,
    ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

import Accordion from "../../components/App/Sidebar/Accordion";
import AccordionItem from "../../components/App/Sidebar/AccordionItem";
import SidebarItem from "../../components/App/Sidebar/SidebarItem";

export default function Sidebar(props) {
    console.log(props.data.projects);

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
                        {Object.values(props.data.projects).map((project) => {
                            if (project.favourite == true) {
                                return (
                                    <AccordionItem
                                        color={project.color}
                                        text={project.name}
                                    />
                                );
                            }
                        })}
                    </Accordion>
                    <Accordion title="Projects" data={props.data}>
                        {Object.values(props.data.projects).map((project) => {
                            return (
                                <AccordionItem
                                    color={project.color}
                                    text={project.name}
                                />
                            );
                        })}
                    </Accordion>
                </div>
            </div>
            <div className="border-t-4 pt-6 border-[#F4F6F8] mb-4">
                <SidebarItem
                    Icon={<CogIcon className="h-6" />}
                    text="Settings"
                />
                <Link href="/logout">
                    <a>
                        <SidebarItem
                            Icon={<ArrowRightOnRectangleIcon className="h-6" />}
                            text="Logout"
                        />
                    </a>
                </Link>
            </div>
        </div>
    );
}
