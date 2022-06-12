import React, { FC } from "react";
import { Container } from "@components/container";
import { SocialFooterItem } from "@components/footer/components/SocialFooterItem";
import { FooterInfo, SocialFooter } from "./contants";
import { FooterInfoItem } from "@components/footer/components/FooterInfoItem";

export const Footer: FC = () => {
    return (
        <>
            <footer className="py-16 bg-footer text-slate-300">
                <Container
                    wrapperClass={"divide-y divide-slate-600 space-y-32"}
                >
                    <div className={"grid grid-cols-12"}>
                        <div className={"col-span-6"}>Info</div>
                        <div className={"col-span-6 flex"}>
                            {FooterInfo.map((info, index) => {
                                return (
                                    <FooterInfoItem
                                        key={index}
                                        title={info?.title}
                                        url={info?.url}
                                        children={info?.children}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className={"space-y-2"}>
                        <div className={"flex items-center space-x-2 py-4"}>
                            {SocialFooter.map((socialIcon) => {
                                return (
                                    <SocialFooterItem
                                        key={socialIcon.key}
                                        children={
                                            <socialIcon.components
                                                width={10}
                                                height={10}
                                            />
                                        }
                                        url={socialIcon.url}
                                    />
                                );
                            })}
                        </div>
                        <p className={"text-xs text-slate-400 px-2"}>
                            Copyright © 2022 by @maitrongnhan99
                        </p>
                    </div>
                </Container>
            </footer>
        </>
    );
};
