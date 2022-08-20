import "../styles/globals.css";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import Head from "next/head";

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
                <Component {...pageProps} />
            </>
        );
    }

    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default App;
