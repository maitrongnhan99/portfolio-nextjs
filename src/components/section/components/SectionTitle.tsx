import { FC, PropsWithChildren, useMemo } from "react";

interface SectionTitleProps {
    title: string;
    index: number;
    position?: string;
}

export const formatIndex = (index) => {
    if (index < 9) {
        return "0" + index;
    }

    return index;
};

export const SectionTitle: FC<PropsWithChildren<SectionTitleProps>> = ({
    title,
    index,
    position,
}) => {
    const sectionIndex = useMemo(() => {
        return formatIndex(Number(index));
    }, [index]);
    return (
        <div
            className={`flex items-center ${
                position === "center" ? "justify-center" : ""
            } space-x-8`}
        >
            <div className={"flex items-center space-x-2"}>
                <h2 className={"text-orange-500 text-5xl"}>{sectionIndex}. </h2>
                <h3 className={"text-2xl text-slate-300"}>{title}</h3>
            </div>
            <span
                className={
                    "w-[200px] border border-top-2 mt-2 border-slate-500"
                }
            />
        </div>
    );
};
