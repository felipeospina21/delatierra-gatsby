// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");
const isProd = process.env.NODE_ENV === "production";
const myCustomQueries = {
  xs: "(max-width: 320px)",
  sm: "(max-width: 720px)",
  md: "(max-width: 1000px)",
  l: "(max-width: 1536px)",
  portrait: "(orientation: portrait)",
};

module.exports = {
  siteMetadata: {
    title: `De La Tierra | Taller Saludable`,
    description: `Productos para una alimentación consciente y saludable`,
    author: `Felipe Ospina C`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
        queries: myCustomQueries,
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-firebase",
      options: {
        credentials: {
          apiKey: "AIzaSyASgMNHxTQUok_sy_4Tyo8Rfl0yS0mEc3Y",
          authDomain: "de-la-tierra-cac1c.firebaseapp.com",
          databaseURL: "https://de-la-tierra-cac1c.firebaseio.com",
          projectId: "de-la-tierra-cac1c",
          storageBucket: "de-la-tierra-cac1c.appspot.com",
          messagingSenderId: "129292105416",
          appId: "1:129292105416:web:00c420c2a7eb73ab91d7fd",
          measurementId: "G-DGGBJP96K8",
        },
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] },
    },
  ],
};
