import React, { FC } from "react";
import { getLayout } from "@components";
import MainBanner from "@components/main-banner";
import { Section } from "@components/section";

const Home: FC = () => {
    return (
        <div className={"space-y-64 py-32"}>
            <MainBanner />
            <Section
                label={"About me"}
                value={"about-me"}
                index={1}
                position={"right"}
            />
            <Section
                label={"Where I've Worked"}
                value={"where-worked"}
                index={2}
                position={"left"}
            />
            <Section
                label={"Some Things I’ve Built"}
                value={"featured-projects"}
                index={3}
                position={"center"}
            />
            <Section
                label={"What’s Next?"}
                value={"contact"}
                index={4}
                position={"center"}
            />
        </div>
    );
};

(Home as any).getLayout = (page) => getLayout(page);

export default Home;
