import "../styles/globals.css";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Head from "next/head";
import { initializeApp } from "firebase/app";
import { Toaster } from "react-hot-toast";
import Sidebar from "./sections/App/Sidebar.jsx";

const firebaseConfig = {
    apiKey: "AIzaSyBp8pVriDep_GPDaHL7WzRmzWSxqRo-QU4",
    authDomain: "tasktrack-38280.firebaseapp.com",
    databaseURL: "https://tasktrack-38280-default-rtdb.firebaseio.com",
    projectId: "tasktrack-38280",
    storageBucket: "tasktrack-38280.appspot.com",
    messagingSenderId: "989803060030",
    appId: "1:989803060030:web:1f3a289c4a96c03467aa6f",
    measurementId: "G-J75MWE9PQD",
};

const app = initializeApp(firebaseConfig);

function App({ Component, pageProps, router }) {
    const Route = router.pathname.startsWith("/app");
    const route = router.pathname.slice(1);
    const title = `${
        route.charAt(0).toUpperCase() + route.slice(1)
    } ~  📝 tasktrack`;

    if (Route) {
        return (
            <>
                <Head>
                    <title>{title}</title>
                </Head>
                <Toaster />
                <Component {...pageProps} />
            </>
        );
    }

    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Toaster />
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default App;
