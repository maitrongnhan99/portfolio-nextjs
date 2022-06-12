import Link from "next/link";
import { FC, useMemo, useState } from "react";
import { formatIndex } from "@components/section/components/SectionTitle";

interface MenuItemProps {
    title: string;
    sectionId: string;
    index: number;
    active: string;
}

export const MenuItem: FC<MenuItemProps> = ({
    title,
    sectionId,
    index,
    active,
}) => {
    const [isShowBottomLine, setIsShowBottomLine] = useState(false);
    const menuIndex = useMemo(() => {
        return formatIndex(index);
    }, [index]);

    return (
        <Link href={sectionId} passHref>
            <a className={"w-full relative"}>
                <span
                    className={"flex items-end space-x-2"}
                    onMouseOver={() => setIsShowBottomLine(true)}
                    onMouseOut={() => setIsShowBottomLine(false)}
                >
                    <span className={"text-orange-700 text-md"}>
                        {menuIndex}
                    </span>
                    <h3 className={"text-sm"}>{title}</h3>
                </span>

                <span
                    className={`${
                        active === sectionId
                            ? `bg-orange-700 absolute`
                            : `bg-slate-300 ${
                                  isShowBottomLine ? "absolute" : "hidden"
                              }`
                    } w-full h-1 -bottom-2 transition transition-all duration-200`}
                />
            </a>
        </Link>
    );
};
