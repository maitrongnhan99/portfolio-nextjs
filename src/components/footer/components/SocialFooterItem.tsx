import Link from "next/link";
import { FC, PropsWithChildren } from "react";

interface SocialFooterItemProps {
    url: string;
    children?: any;
}

export const SocialFooterItem: FC<PropsWithChildren<SocialFooterItemProps>> = ({
    children,
    url,
}) => {
    return (
        <Link href={url ? url : "/"} passHref>
            <a
                className={
                    "text-gray-100 hover:social-icon-hover hover:text-gray-300 p-2 rounded-full"
                }
            >
                {children}
            </a>
        </Link>
    );
};
