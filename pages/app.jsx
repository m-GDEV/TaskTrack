import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { ArrowPathIcon } from "@heroicons/react/24/outline";

import AppNavbar from "../src/sections/App/AppNavbar.jsx";
import Sidebar from "../src/sections/App/Sidebar.jsx";
import Main from "../src/sections/App/Main.jsx";

export default function App({ children }) {
  const auth = getAuth();
  const router = useRouter();

  const db = getDatabase();

  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect((auth, router, db) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfoRef = ref(db, "users/" + user.uid);

        setTimeout(() => {}, 500);
        onValue(userInfoRef, (snapshot) => {
          const data = snapshot.val();
          setUserData(data);
        });
      } else {
        setTimeout(() => {
          toast.error("You're not logged in, redirecting...");
          router.push("/");
        }, 500);
      }
    });
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [userData]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-row place-items-center justify-center text-dp">
        <ArrowPathIcon className="mr-2 h-9 animate-spin" />
        <h1 className="text-4xl ">Loading...</h1>
      </div>
    );
  } else if (!loading && Object.keys(userData).length != 0) {
    return (
      <div className="bg-[#FFFEFE] h-screen overflow-x-hidden flex flex-col">
        <AppNavbar data={userData} />
        <div className="flex flex-row grow w-full">
          <Sidebar data={userData} />
          <div className="px-6 py-8 border-l-4 bg-gray-300 w-full">
            <h1 className="text-5xl font-carter-one text-cb ">Hi There!</h1>
            <p className="pt-4 text-2xl font-cabin text-gray-800 ">
              Welcome to TaskTrack! Please select a project on the left to get
              started!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
