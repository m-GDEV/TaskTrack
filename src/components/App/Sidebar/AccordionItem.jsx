import Circle from "./Circle";
import Link from "next/link";
import { useRouter } from "next/router";

export default function AccordionItem(props) {
    const router = useRouter();

    const givenProjectId = props.id;
    const givenProjectName = props.name;

    return (
        <div
            className={`flex flex-row items-center gap-4 text-dm-sans text-base cursor-pointer`}
        >
            <Circle height="12px" width="12px" color={props.color} />
            <Link href={"/app/" + props.text}>
                <a
                    className="text-[#AAADAF] hover:text-[#666869]"
                    onClick={(e) => {
                        e.preventDefault();
                        router.push({
                            pathname: `/app/${givenProjectId}`,
                            query: { pid: "dick" },
                        });
                    }}
                >
                    {props.text}
                </a>
            </Link>
        </div>
    );
}
