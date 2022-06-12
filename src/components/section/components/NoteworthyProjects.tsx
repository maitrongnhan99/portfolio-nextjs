import { RiFolderShield2Line } from "react-icons/ri";
import { BiLinkExternal } from "react-icons/bi";

interface ProjectItemProps {
    url: string;
    title: string;
    description: string;
    technologies: string[];
}

const ProjectItem = ({ url, title, description, technologies }) => {
    return (
        <div
            className={
                "w-full group text-slate-400 hover:-translate-y-2 px-4 py-8 space-y-8 bg-slate-800 rounded-md shadow-md"
            }
        >
            <div className={"flex items-start justify-between"}>
                <RiFolderShield2Line className={"h-6 w-6"} />

                <BiLinkExternal className={"h-6 w-6"} />
            </div>

            <div className={"space-y-2"}>
                <h4 className={"text-lg group-hover:text-orange-700"}>
                    {title}
                </h4>
                <p className={"text-sm"}>{description}</p>
            </div>

            <div className={"flex space-x-4 text-xs"}>
                {technologies.map((tech, index) => {
                    return <span key={index}>{tech}</span>;
                })}
            </div>
        </div>
    );
};

const data = [
    {
        url: "/",
        title: "Integrating Algolia Search with WordPress Multisite",
        description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        technologies: ["Next.js", "ReactJS", "MongoDB", "ExpressJS"],
    },
    {
        url: "/",
        title: "Integrating Algolia Search with WordPress Multisite",
        description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        technologies: ["Next.js", "ReactJS", "MongoDB", "ExpressJS"],
    },
    {
        url: "/",
        title: "Integrating Algolia Search with WordPress Multisite",
        description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        technologies: ["Next.js", "ReactJS", "MongoDB", "ExpressJS"],
    },
    {
        url: "/",
        title: "Integrating Algolia Search with WordPress Multisite",
        description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        technologies: ["Next.js", "ReactJS", "MongoDB", "ExpressJS"],
    },
    {
        url: "/",
        title: "Integrating Algolia Search with WordPress Multisite",
        description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        technologies: ["Next.js", "ReactJS", "MongoDB", "ExpressJS"],
    },
    {
        url: "/",
        title: "Integrating Algolia Search with WordPress Multisite",
        description:
            "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
        technologies: ["Next.js", "ReactJS", "MongoDB", "ExpressJS"],
    },
];

export const NoteworthyProjects = () => {
    return (
        <div className={"space-y-16 px-32 w-full"}>
            <div
                className={
                    "text-slate-300 flex justify-center items-center flex-col"
                }
            >
                <h3 className={"text-xl"}>Other Noteworthy Projects</h3>
                <span className={"cursor-pointer text-orange-500"}>
                    view the archive
                </span>
            </div>

            <div className={"grid grid-cols-12 gap-8"}>
                {data.map((project, index) => {
                    return (
                        <div key={index} className={"col-span-4 w-full"}>
                            <ProjectItem
                                url={project.url}
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
