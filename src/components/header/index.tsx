import { Container } from "@components/container";
import React, { FC, useEffect, useState } from "react";
import { MenuItem } from "@components/header/components/MenuItem";
import { useRouter } from "next/router";
import Image from "next/image";
import DarkLogo from "@public/images/logo/dark-rectangle.png";

const menuItems = [
    {
        title: "Home",
        sectionId: "#home",
        index: 1,
    },
    {
        title: "About",
        sectionId: "#about-me",
        index: 2,
    },
    {
        title: "Projects",
        sectionId: "#projects",
        index: 3,
    },
    {
        title: "Contact",
        sectionId: "#contact",
        index: 4,
    },
];

export const Header: FC = () => {
    const router = useRouter();
    const [activeMenuItem, setActiveMenuItem] = useState(null);

    useEffect(() => {
        if (router) {
            const path = router?.asPath.split("/");

            if (path) {
                path.map((item) => {
                    if (item.includes("#") && item.startsWith("#")) {
                        setActiveMenuItem(item);
                    }
                });
            }
        }
    }, [router]);

    return (
        <>
            <header className={"bg-slate-900"}>
                <Container wrapperClass={"h-full"}>
                    <div className={"flex h-full items-center justify-between"}>
                        <div>
                            <Image
                                src={DarkLogo}
                                width={300}
                                height={80}
                                objectFit={"cover"}
                            />
                        </div>

                        <ul
                            className={
                                "text-white flex items-center space-x-16"
                            }
                        >
                            {menuItems.map((menu) => {
                                return (
                                    <li
                                        key={menu.index}
                                        onClick={() =>
                                            setActiveMenuItem(menu.sectionId)
                                        }
                                    >
                                        <MenuItem
                                            title={menu.title}
                                            sectionId={menu.sectionId}
                                            index={menu.index}
                                            active={activeMenuItem}
                                        />
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </Container>
            </header>
        </>
    );
};
