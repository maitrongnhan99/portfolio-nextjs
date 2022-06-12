import React from "react";

export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export const Button: React.FC<IButton> = ({
    className = "w-max",
    children,
    ...props
}) => {
    return (
        <button
            className={`py-2 px-4 rounded border border-orange-300 text-orange-300 focus:outline-none ring-opacity-75 ring-green-400 focus:ring text-lg ${className}`}
            {...props}
            data-testid="btn"
        >
            {children}
        </button>
    );
};
