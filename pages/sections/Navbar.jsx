import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <div className="h-24 bg-dp"></div>
            <Nav />
        </>
    );
}

function Nav() {
    return (
        <header className="fixed z-10 top-0 w-full backdrop-blur-3xl bg-dpr">
            <div className="container flex flex-row pt-2 mx-auto justify-between border-b-[6px] border-lp pb-3 text-white">
                <div className="place-items-center flex pl-6">
                    <Link href="/">
                        <a className="text-white text-3xl font-carter-one">
                            📝 tasktrack
                        </a>
                    </Link>
                </div>
                <div className="flex flex-row gap-2 place-items-center text-xl font-cabin text-2xl">
                    <div className="flex flex-row gap-2 ">
                        <a className="hover:underline" href="/changelog">
                            changelog
                        </a>
                        <a className="hover:underline" href="/about">
                            about
                        </a>
                    </div>
                    <div className="flex flex-row p-2 gap-4 items-center">
                        <Link href="/login">
                            <a className="bg-cb px-7 py-2.5 rounded-xl text-tlb hover:text-white transition-all duration-300">
                                login
                            </a>
                        </Link>
                        <Link href="/register">
                            <a className="bg-lb px-7 py-2.5 rounded-xl hover:text-white text-lw transition-all duration-300">
                                register
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
