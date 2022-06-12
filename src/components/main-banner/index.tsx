import { Button, Container } from "@components";
import { useAnimation } from "framer-motion";
import { useState } from "react";

const Services = [
    "great UI/UX website",
    "interactive digital experiences on the web",
    "things for the web",
];

const MainBanner = () => {
    const controls = useAnimation();
    const [description, setDescription] = useState("make websites");

    return (
        <Container>
            <div
                className={
                    "h-[50vh] flex flex-col justify-center text-slate-300 space-y-8 text-lg"
                }
            >
                <p className={"text-orange-700"}>Hi, my name is</p>

                <p className={"text-8xl font-medium text-slate-300"}>
                    Mai Trọng Nhân.
                </p>

                <p className={"text-6xl text-slate-500"}>
                    I build things for the web
                </p>

                <p className={"w-3/4"}>
                    I’m a front-end developer specializing in building
                    interactive digital experiences on the web
                </p>

                <Button className={"w-200px"}>Say hi!</Button>
            </div>
        </Container>
    );
};

export default MainBanner;
