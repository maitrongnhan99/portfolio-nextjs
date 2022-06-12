import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
} from "next/document";

class CustomDocument extends Document {
    static async getInitialProps(
        ctx: DocumentContext,
    ): Promise<DocumentInitialProps> {
        return await Document.getInitialProps(ctx);
    }

    render() {
        return (
            <Html lang={"vi"}>
                <Head>
                    {/*<link*/}
                    {/*    rel="apple-touch-icon"*/}
                    {/*    href="/icons/touch-icon-iphone.png"*/}
                    {/*/>*/}
                    {/*<link*/}
                    {/*    rel="apple-touch-icon"*/}
                    {/*    sizes="152x152"*/}
                    {/*    href="/icons/logo/ios/AppIcon.appiconset/Icon-App-76x76@2x.png"*/}
                    {/*/>*/}
                    {/*<link*/}
                    {/*    rel="apple-touch-icon"*/}
                    {/*    sizes="167x167"*/}
                    {/*    href="/icons/logo/ios/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png"*/}
                    {/*/>*/}
                    {/*<link*/}
                    {/*    rel="icon"*/}
                    {/*    type="image/png"*/}
                    {/*    sizes="48x48"*/}
                    {/*    href="/icons/logo/android/mipmap-mdpi/ic_launcher.png"*/}
                    {/*/>*/}
                    {/*<link*/}
                    {/*    rel="icon"*/}
                    {/*    type="image/png"*/}
                    {/*    sizes="36x36"*/}
                    {/*    href="/icons/logo/android/mipmap-ldpi/ic_launcher.png"*/}
                    {/*/>*/}

                    {/*<link*/}
                    {/*    rel="shortcut icon"*/}
                    {/*    type="image/x-icon"*/}
                    {/*    href="/images/favicon.ico"*/}
                    {/*/>*/}

                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin={"true"}
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=optional"
                        rel="stylesheet"
                    />
                    <title>Mai Trọng Nhân - Portfolio Website</title>
                </Head>
                <body
                    className={
                        "dark:bg-slate-900/80 bg-white text-black dark:text-slate-300 transition-all duration-200"
                    }
                >
                    <Main />
                    <NextScript />
                    <div id="modal-root"></div>
                </body>
            </Html>
        );
    }
}

export default CustomDocument;
