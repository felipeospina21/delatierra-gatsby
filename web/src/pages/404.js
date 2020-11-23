import React from "react";
import SEO from "../components/seo";
import WhatsappBtn from "../components/Layout/WhatsappBtn";

const NotFoundPage = () => (
  <div>
    <SEO title="404: Not found" />
    <WhatsappBtn />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
