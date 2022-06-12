import { Button } from "@components";

export const Contact = () => {
    return (
        <div
            className={
                "w-full flex flex-col items-center text-slate-400 space-y-8"
            }
        >
            <div className={"w-1/2 text-center space-y-2"}>
                <h3 className={"text-2xl"}>Get In Touch</h3>
                <p>
                    Although I’m not currently looking for any new
                    opportunities, my inbox is always open. Whether you have a
                    question or just want to say hi, I’ll try my best to get
                    back to you!
                </p>
            </div>

            <Button>Say hi!</Button>
        </div>
    );
};
