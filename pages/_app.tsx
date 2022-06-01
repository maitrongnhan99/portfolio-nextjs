import React, {
    ComponentType,
    Fragment,
    PropsWithChildren,
    ReactElement,
    ReactNode,
} from "react";
import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "@styles/global.scss";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const ThemeProvider: PropsWithChildren<any> = dynamic<any>(() =>
    import("next-themes").then((md) => md.ThemeProvider),
);
const SimpleReactLightboxLazy: PropsWithChildren<any> = dynamic(
    () => import("simple-react-lightbox"),
);

const AnimatePresence: PropsWithChildren<any> = dynamic<any>(() =>
    import("framer-motion").then((md) => md.AnimatePresence),
);

type Page = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
    layout?: ComponentType;
};

type MyAppsProps = AppProps & {
    Component: Page | PropsWithChildren<any>;
};

function MyApp({ Component, pageProps }: MyAppsProps): JSX.Element {
    const getLayout = Component.getLayout ?? ((page: Page) => page);
    const Layout = Component.layout ?? Fragment;
    return (
        <ThemeProvider attribute={"class"} defaultTheme={"light"}>
            <SimpleReactLightboxLazy>
                <Layout>
                    {getLayout(
                        <AnimatePresence
                            exitBeforeEnter
                            initial={false}
                            onExitComplete={() => window.scrollTo(0, 0)}
                        >
                            <Component {...pageProps} />
                        </AnimatePresence>,
                    )}
                </Layout>
            </SimpleReactLightboxLazy>
        </ThemeProvider>
    );
}

export default MyApp;
