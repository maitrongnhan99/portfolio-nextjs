import {
    createContext,
    FC,
    PropsWithChildren,
    ReactElement,
    ReactNode,
} from "react";
import { Header } from "@components/header";
import { Footer } from "@components/footer";

interface LayoutProps {
    children: ReactNode | ReactElement;
    showHeaderFooter?: boolean;
}

export const RootContext = createContext(null);

export const Layout: FC<PropsWithChildren<LayoutProps>> = ({
    children,
    showHeaderFooter = true,
}) => {
    return (
        <>
            <RootContext.Provider value={{}}>
                {showHeaderFooter && <Header />}
                <main className={"min-h-screen h-full bg-slate-900"}>
                    {children}
                </main>

                {showHeaderFooter && <Footer />}
            </RootContext.Provider>
        </>
    );
};

export const getLayout = (page, showHeaderFooter = true): ReactNode => {
    return <Layout showHeaderFooter={showHeaderFooter}>{page}</Layout>;
};
