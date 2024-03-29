import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import Testimonial from "../testimonial/testimonial";
import classes from "../../styles/pages/homePage/testimonials.module.scss";

const getImages = graphql`
  {
    One: file(name: { eq: "rhoobee" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
    Two: file(name: { eq: "nhicole" }) {
      childCloudinaryAsset {
        fluid {
          ...CloudinaryAssetFluid
        }
      }
    }
  }
`;

const Testimonials = () => {
  const data = useStaticQuery(getImages);

  const rhoobeeQuote = (
    <blockquote>
      <p>We have been part of the Beats and Steps family since 2016.</p>
      <p>
        I think that dance and music can play an important role in your child’s
        development and what better way to do this by partnering with a school
        that can help your child reach their full potential, build their
        confidence and really support your child on a personal level where the
        teachers work with the parents to improve not only on their kids’
        talents but also on self-improvement.
      </p>
      <p>
        As the saying goes, “it takes a village to raise a child” and Beats and
        Steps is definitely part of my village.
      </p>
    </blockquote>
  );

  const nhicoleQuote = (
    <blockquote>
      <p>
        My daughters have been with Beats and Steps since they were 3 1/2 and 2
        years old. They have grown with this school in dance as well as in
        various life skills. They have expanded our children’s perspectives and
        have opened up a world of experiences both locally and internationally.{" "}
      </p>
      <p>
        This “Practice makes Progress" rather than “Practice makes Perfect”
        culture in the school instills a love for learning in the students that
        keep them excited and eager to accept new challenges
      </p>
      <p>
        Beats and Steps has fostered new and old friendships amongst students
        and parents alike. We are proud and happy to call this dance studio our
        second home.
      </p>
    </blockquote>
  );

  const parentOne = {
    quote: rhoobeeQuote,
    name: "Mommy Rhoobee - Parent of Areej, Yasmin and Amina",
    alt: "Daughters of Mommy Rhoobee",
    fluid: data.One.childCloudinaryAsset.fluid,
  };
  const parentTwo = {
    quote: nhicoleQuote,
    name: "Mommy Nhicole - Parent of Lexie and Sophia",
    alt: "Daughters of Mommy Nhicole",
    fluid: data.Two.childCloudinaryAsset.fluid,
  };

  return (
    <section className="sectionContainer">
      <h2 className={classes.title}>What people are saying about us!</h2>
      <ul className={classes.testimonialsContainer}>
        <Testimonial
          quote={parentOne.quote}
          name={parentOne.name}
          alt={parentOne.alt}
          fluid={parentOne.fluid}
        />
        <Testimonial
          quote={parentTwo.quote}
          name={parentTwo.name}
          alt={parentTwo.alt}
          fluid={parentTwo.fluid}
        />
      </ul>
    </section>
  );
};

export default Testimonials;
