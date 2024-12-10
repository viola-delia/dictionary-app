import React from "react";

export default function Result(props) {
    if(props.results) {
    return <div className="Results">Hello from Results
            </div>;

        
    } else {
       return null;
    }
}