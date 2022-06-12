import { FaNodeJs } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { SiJavascript, SiMongodb, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const Technologies = [
    {
        label: "JavaScript (ES6)",
        icon: SiJavascript,
        color: "#ead41c",
    },
    {
        label: "React",
        icon: RiReactjsFill,
        color: "#02a0d0",
    },
    {
        label: "Next.js",
        icon: TbBrandNextjs,
        color: "#ffffff",
    },
    {
        label: "Node.js",
        icon: FaNodeJs,
        color: "#84bb0a",
    },
    {
        label: "TypeScript",
        icon: SiTypescript,
        color: "#3072bc",
    },
    {
        label: "MongoDB",
        icon: SiMongodb,
        color: "#00a53f",
    },
];

export const AboutMe = () => {
    return (
        <div className={"w-3/4 text-slate-400 space-y-4"}>
            <p>
                Hello! My name is Nhan and I enjoy creating things that live on
                the internet. My interest in web development started back in
                2012 when I decided to try editing custom Tumblr themes — turns
                out hacking together a custom reblog button taught me a lot
                about HTML & CSS!
            </p>

            <p>
                Fast-forward to today, and I’ve had the privilege of working at
                an advertising agency, a start-up, a huge corporation, and a
                student-led design studio. My main focus these days is building
                accessible, inclusive products and digital experiences at
                Upstatement for a variety of clients.
            </p>

            <p>
                I also recently launched a course that covers everything you
                need to build a web app with the Spotify API using Node & React.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>

            <div className={"flex space-x-8"}>
                <div className={"space-y-2"}>
                    {Technologies.map((tech, index) => {
                        return (
                            <>
                                {index < 3 && (
                                    <div
                                        key={tech.label}
                                        className={
                                            "flex items-center space-x-4"
                                        }
                                    >
                                        <tech.icon
                                            style={{
                                                color: tech.color,
                                            }}
                                        />
                                        <span>{tech.label}</span>
                                    </div>
                                )}
                            </>
                        );
                    })}
                </div>

                <div className={"space-y-2"}>
                    {Technologies.map((tech, index) => {
                        return (
                            <>
                                {index >= 3 && (
                                    <div
                                        key={tech.label}
                                        className={
                                            "flex items-center space-x-4"
                                        }
                                    >
                                        <tech.icon
                                            style={{
                                                color: tech.color,
                                            }}
                                        />
                                        <span>{tech.label}</span>
                                    </div>
                                )}
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
