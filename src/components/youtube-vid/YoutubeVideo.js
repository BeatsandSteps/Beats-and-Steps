import React from "react";

import classes from "./youtubeVid.module.scss";

const YouVideo = ({ videoSrcURL, videoTitle, ...props }) => (
  <section className={classes.vimeoSection}>
    <header className={classes.vimeoContainer}>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </header>
  </section>
);
export default YouVideo;
