import { FC, PropsWithChildren } from "react";

interface ContainerProps {
    children?: any;
    wrapperClass?: string;
}

export const Container: FC<PropsWithChildren<ContainerProps>> = ({
    children,
    wrapperClass,
}) => {
    return (
        <div className={`container ${wrapperClass ? wrapperClass : ""}`}>
            {children}
        </div>
    );
};
