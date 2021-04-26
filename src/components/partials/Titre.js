import React from "react";

const Title = ({ title }) => {

    return (
        <h1 style={{ textAlign: "center" }}>{title || ""}</h1>

    );
};


export default Title
