import React, { FC, PropsWithChildren } from "react";
import Link from "next/link";

interface FooterInfoItemProps {
    title: string;
    url: string;
    children: { title: string; url: string }[];
}

export const FooterInfoItem: FC<PropsWithChildren<FooterInfoItemProps>> = ({
    title,
    url,
    children,
}) => {
    return (
        <div className={"flex-1 space-y-4"}>
            <Link href={url ? url : "/"} passHref>
                <a>
                    <h3 className={"text-sm"}>{title}</h3>
                </a>
            </Link>

            <ul className={"space-y-2 text-sm"}>
                {children &&
                    children.length > 0 &&
                    children.map((item, index) => {
                        return (
                            <Link href={item?.url ? item?.url : "/"} passHref>
                                <a>
                                    <li key={index}>{item?.title}</li>
                                </a>
                            </Link>
                        );
                    })}
            </ul>
        </div>
    );
};
