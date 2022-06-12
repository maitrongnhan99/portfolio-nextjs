import Link from "next/link";
import { useState } from "react";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

const WorkedPlaces = [
    {
        id: 1,
        name: "Eduvator",
        role: "Front-end Developer",
        time: "November 2021 - Present",
        experiences: [
            "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an ambitious startup originating from Northeastern",
            "Helped solidify a brand direction for blistabloc that spans both packaging and web",
            "Interfaced with clients on a weekly basis, providing technological expertise",
        ],
    },
    {
        id: 2,
        name: "Apple",
        role: "Intern Developer",
        time: "January - April 2020",
        experiences: [
            "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
            "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
            "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps",
        ],
    },
    {
        id: 3,
        name: "Tesla",
        role: "Intern Developer",
        time: "January - April 2020",
        experiences: [
            "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
            "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
            "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps",
        ],
    },
    {
        id: 4,
        name: "Amazon",
        role: "Intern Developer",
        time: "January - April 2020",
        experiences: [
            "Developed and shipped highly interactive web applications for Apple Music using Ember.js",
            "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
            "Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps",
        ],
    },
];

export const WhereWorked = () => {
    const [activePlace, setActivePlace] = useState(WorkedPlaces[0]);
    return (
        <div className={"text-slate-400 flex space-x-4"}>
            <div>
                {WorkedPlaces.map((place, index) => {
                    return (
                        <div
                            key={place.id}
                            onClick={() => setActivePlace(place)}
                            className={"cursor-pointer relative flex space-x-8"}
                        >
                            <span className={"flex items-center relative"}>
                                <span
                                    className={`absolute border-l-2 ${
                                        activePlace?.id === place?.id
                                            ? "border-orange-700"
                                            : "border-slate-600"
                                    } h-full`}
                                />
                                <span
                                    className={
                                        "hover:bg-slate-700 w-[150px] px-6 py-2 rounded-tr rounded-br"
                                    }
                                >
                                    {place.name}
                                </span>
                            </span>
                        </div>
                    );
                })}
            </div>

            <div className={"space-y-4"}>
                <div>
                    <span className={"flex items-center space-x-2"}>
                        <h3 className={"text-lg"}>{activePlace.name}</h3>
                        <Link href={"/"} passHref>
                            <a className={"text-orange-500"}>
                                @{activePlace.name}
                            </a>
                        </Link>
                    </span>
                    <span className={"text-xs"}>{activePlace.time}</span>
                </div>

                <div className={"space-y-2"}>
                    {activePlace.experiences.map((item) => {
                        return (
                            <div
                                key={item}
                                className={"flex h-full space-x-2 items-start"}
                            >
                                <span className={"mt-1 text-green-500"}>
                                    <IoShieldCheckmarkOutline
                                        width={10}
                                        height={10}
                                    />
                                </span>
                                <span>{item}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
