import React from "react";

import Layout from "../components/Layout";

const Tickets = () => {

    return <Layout>
        <div className="flex flex-col md:pt-20 pt-12 pb-5 md:mx-20">
            <iframe src="https://obenair.ticket.io/"
                title="Tickets"
                className="w-full h-screen"
                allowtransparency="true">
            </iframe>
            <script async src="https://obenair.ticket.io/iframe.js"></script>
        </div>
    </Layout>;
}

export default Tickets; 