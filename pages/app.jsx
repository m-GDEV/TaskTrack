import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import AppNavbar from "./sections/App/AppNavbar.jsx";
import Sidebar from "./sections/App/Sidebar.jsx";
import Main from "./sections/App/Main.jsx";

export default function App() {
    const auth = getAuth();
    const router = useRouter();

    const db = getDatabase();

    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log(user);
                const userInfoRef = ref(db, "users/" + user.uid);

                onValue(userInfoRef, (snapshot) => {
                    const data = snapshot.val();
                    console.log(data);
                    setUserData(data);
                });

                setLoading(false);
            } else {
                setTimeout(() => {
                    toast.error("You're not logged in, redirecting...");
                    router.push("/");
                }, 500);
            }
        });
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-row place-items-center justify-center text-dp">
                <ArrowPathIcon className="mr-2 h-9 animate-spin" />
                <h1 className="text-4xl ">Loading...</h1>
            </div>
        );
    }
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
