import { Container } from "@components/container";
import { SectionTitle } from "@components/section/components/SectionTitle";
import { FC } from "react";
import { AboutMe } from "@components/section/components/AboutMe";
import { WhereWorked } from "@components/section/components/WhereWorked";
import {
    FeaturedProjectItem,
    FeaturedProjects,
} from "@components/section/components/FeaturedProjects";
import FeatureProject01 from "@public/images/featuredProjects/temp1.png";
import { Contact } from "@components/section/components/Contact";

const FeaturedProjectsData: FeaturedProjectItem[] = [
    {
        image: {
            src: FeatureProject01,
            position: "left",
        },
        title: "Halcyon Theme",
        technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    },
    {
        image: {
            src: FeatureProject01,
            position: "right",
        },
        title: "Halcyon Theme",
        technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    },
    {
        image: {
            src: FeatureProject01,
            position: "left",
        },
        title: "Halcyon Theme",
        technologies: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
    },
];

interface SectionProps {
    label: string;
    value: "about-me" | "where-worked" | "featured-projects" | "contact";

    index: number;
    position: "left" | "right" | "center";
}

export const Section: FC<SectionProps> = ({
    label,
    value,
    index,
    position = "left",
}) => {
    return (
        <Container wrapperClass={"w-full"}>
            <div
                className={`${
                    position === "center"
                        ? "flex items-center justify-center"
                        : "grid grid-cols-12"
                }`}
            >
                <div
                    className={`${
                        position !== "right" ? "hidden" : "col-span-4"
                    }`}
                />

                <div
                    id={"about-me"}
                    className={`${
                        position !== "center" ? "col-span-8" : "self-center"
                    } space-y-8`}
                >
                    <SectionTitle
                        title={label}
                        index={index}
                        position={position}
                    />

                    {value === "about-me" && <AboutMe />}
                    {value === "where-worked" && <WhereWorked />}
                    {value === "featured-projects" && (
                        <FeaturedProjects data={FeaturedProjectsData} />
                    )}
                    {value === "contact" && <Contact />}
                </div>
            </div>
        </Container>
    );
};
