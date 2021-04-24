import React from "react";
import { Layout } from "antd";

const FooterPartial = () => {
    const { Footer } = Layout

    return (
        <Footer
            style={{
                textAlign: "center",
                backgroundColor: "transparent"
            }}
        >
            &copy;  Pokemon 0.0.0
        </Footer>
    );
};


export default FooterPartial
