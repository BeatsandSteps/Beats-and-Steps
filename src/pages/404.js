import React from "react";

import Layout from "../components/navigation/Layout";
import SEO from "../components/SEO/SEO";
import NavLink from "../components/navigation/NavLink";
import classes from "../styles/pages/404.module.scss";

const NotFoundPage = () => (
      <h1 className={classes.errorHeading}>Sorry, this page doesn't exist!</h1>
);

export default NotFoundPage;
