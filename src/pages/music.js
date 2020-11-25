import React from "react";
import Layout from "../components/navigation/Layout";
import classes from "../styles/pageStyles/music.module.scss";
import Image from "../components/Image";
import NavLink from "../components/navigation/NavLink";
// import SEO from "../components/SEO";

const Music = () => {
  return (
    <Layout>
      <section className={classes.musicContainer}>
        <Image
          className={classes.image}
          filename="guitar.jpg"
          alt="Beats and Steps student playing guitar"
          style={{ objectPosition: "top" }}
        />
        <div className={classes.section}>
          <h1>Music Classes</h1>
          <div className={classes.text}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse tristique dui sed urna dapibus, ac porta eros
              fermentum. In lacus mi, placerat vitae neque id, posuere semper
              eros. Vestibulum ante ipsum primis in faucibus orci luctus et
              ultrices posuere cubilia curae; Quisque eros magna, mollis non
              eros at, fringilla imperdiet mi. Phasellus ac ligula neque.
              Vivamus eu tempor elit. Nullam non arcu nibh. Quisque feugiat
              risus non efficitur lacinia. Aliquam ac purus auctor, maximus
              justo varius, imperdiet purus. Donec erat elit, pellentesque ut
              pretium eget, faucibus in urna. Morbi feugiat, mauris quis
              lobortis semper, tellus ligula placerat turpis, in varius enim
              dolor id est. Nam dui orci, interdum ut tincidunt et, pulvinar et
              tortor. Curabitur venenatis, diam id egestas scelerisque, velit
              orci semper leo, quis vulputate orci nisl quis erat. Aliquam nec
              tellus nec mauris lacinia vehicula quis iaculis risus.
            </p>
            <NavLink link="/contact">Enroll Here</NavLink>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Music;