import Image from "next/image";
import img from "../public/images/clipboard.png";

export default function Drink() {
    return (
        <div>
            <h1>DRINK</h1>
            <Image
                src={img}
                alt="Picture of the author"
                // width={500} automatically provided
                // height={500} automatically provided
                // blurDataURL="data:..." automatically provided
                placeholder="blur" // Optional blur-up while loading
            />
        </div>
    );
}
