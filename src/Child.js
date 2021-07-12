import {useParams} from "react-router-dom";
import React from "react";

export default function Child() {
    // We can use the `useParams` hook here to access
    // the dynamic pieces of the URL.
    let { id } = useParams();

    return (
        <div>
            <h3>Is: {id}</h3>
        </div>
    );
}