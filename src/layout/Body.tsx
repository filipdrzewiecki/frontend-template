import React from "react";
import './body.css';
import List from "../page/List";

//same as export default () => {
const body = function() {
    return (
        <div className="body">
            <div className="body_content">
                <List/>
            </div>
        </div>
    );
}

export default body;