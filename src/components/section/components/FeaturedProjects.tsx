import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { NoteworthyProjects } from "@components/section/components/NoteworthyProjects";

export interface FeaturedProjectItem {
    image: {
        src: StaticImageData;
        position: string;
    };
    title: string;
    technologies: string[];
}

interface FeaturedProjectsProps {
    data: FeaturedProjectItem[];
}

export const FeaturedProjects: FC<PropsWithChildren<FeaturedProjectsProps>> = ({
    data,
}) => {
    return (
        <div className={"space-y-32"}>
            {data.map((project, index) => {
                return (
                    <div
                        className={`w-full flex ${
                            project.image.position === "left"
                                ? "flex-row"
                                : "flex-row-reverse"
                        } space-x-8 relative`}
                        key={index}
                    >
                        <div className={"h-full w-1/2"}>
                            <Image
                                src={project.image.src}
                                layout={"responsive"}
                            />
                        </div>

                        <div className={"flex flex-col items-center w-1/2"}>
                            <div>
                                <span
                                    className={
                                        "text-orange-500 text-sm text-right w-full"
                                    }
                                >
                                    Featured Project
                                </span>
                                <h3 className={"text-xl text-slate-300"}>
                                    {project.title}
                                </h3>
                            </div>
                        </div>

                        <div
                            className={`absolute right-0 top-20 ${
                                project.image.position === "left"
                                    ? "right-40"
                                    : "left-40"
                            } z-20 w-1/2 p-4 bg-slate-800 text-slate-400 rounded-md`}
                            style={{ textAlign: "right" }}
                        >
                            A minimal, dark blue theme for VS Code, Sublime
                            Text, Atom, iTerm, and more. Available on Visual
                            Studio Marketplace, Package Control, Atom Package
                            Manager, and npm.
                        </div>
                        <div
                            className={
                                "flex items-center absolute top-52 right-40 z-20 space-x-4"
                            }
                        >
                            {project.technologies.map((tech) => {
                                return (
                                    <span
                                        key={tech}
                                        className={"text-orange-700"}
                                    >
                                        {tech}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                );
            })}

            <div className={"w-full flex items-center justify-center"}>
                <NoteworthyProjects />
            </div>
        </div>
    );
};
