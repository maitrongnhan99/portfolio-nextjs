declare global {
    export namespace React {
        interface FunctionComponent {
            getLayout?: (page) => React.ReactNode;
            requiredAuth?: boolean;
        }
    }
}
