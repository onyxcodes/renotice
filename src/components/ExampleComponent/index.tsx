import "./index.scss";
import React from "react";

export interface ExampleCmpProps {
    // Define the props here
    classname?: string;
}

const ExampleComponent: React.FC<ExampleCmpProps> = ( props ) => {
    const { classname = "example-component" } = props;

    return <div className={classname}>Hello Underworld</div>
}

export default ExampleComponent