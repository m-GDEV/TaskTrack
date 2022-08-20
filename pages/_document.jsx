import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <meta charset="UTF-8" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Cabin&family=Carter+One&family=DM+Sans&display=swap&family=Poppins"
                    rel="stylesheet"
                />
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="/images/clipboard.png"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
