import {
  ClipboardDocumentListIcon,
  CalendarIcon,
  BellIcon,
  ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import { Badge } from "../src/components/Badge.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-dp">
      <div>
        <div className="flex flex-row py-44 place-items-center justify-center container mx-auto">
          <div className="text-white mr-8">
            <h1 className="md:text-7xl text-5xl font-carter-one pb-2">
              tasktrack
            </h1>
            <p className="font-dm-sans md:text-4xl text-xl">
              is a task management platform that is
              <nobr className="font-bold"> JUST </nobr>
              like other girls.
            </p>
          </div>

          <Image
            src="/images/clipboard.png"
            className="w-3/12 xl:w-2/12"
            alt="Image of Clipboard"
          />
        </div>
      </div>
      <div className="bg-mp  rounded-t-lg container mx-auto">
        <h2 className="flex justify-center text-lw pt-14 text-4xl font-cabin">
          managing tasks just got easier
        </h2>
        <div className="flex flex-row mt-20 justify-center gap-24 px-10 place-items-center pb-10">
          <div className="flex flex-col">
            <Badge
              text="track tasks"
              Icon={<ClipboardDocumentListIcon className="h-10" />}
            />
            <Badge
              text="schedule your day"
              Icon={<CalendarIcon className="h-10" />}
            />
            <Badge
              text="organize with projects"
              Icon={<ArchiveBoxIcon className="h-10" />}
            />
            <Badge
              text="receive notifications"
              Icon={<BellIcon className="h-10" />}
            />
          </div>
          <div className="flex flex-col justify-center text-center ">
            <h3 className="font-cabin italic text-3xl text-slp mb-2 drop-shadow-xl">
              just like the snap of a finger
            </h3>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4456/4456908.png"
              className="rounded-3xl max-h-80"
              alt="Image of snapping finer indicating ease of use"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
