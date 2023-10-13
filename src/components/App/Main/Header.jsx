import Image from "next/image";
import defaultProfilePic from "../../../../public/images/defaultProfileImage.png";

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
                <Image
                    src={defaultProfilePic}
                    className="h-8"
                    alt="Default Profile Image"
                    height="30"
                    width="30"
                />
            </div>
        </div>
    );
}
