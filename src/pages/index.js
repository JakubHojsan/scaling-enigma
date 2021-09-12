import React from "react";
import {
  AboutSection,

  ContactSection,
  ArticlesSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Jakub Hojsan" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        <InterestsSection sectionId="details" heading="Interests" />
        <ProjectsSection sectionId="projects" heading="Current Projects and Endeavors" />
        <ArticlesSection sectionId="articles" heading="Project Writeups" sources={['Medium']} />
        <ContactSection sectionId="github" heading="Socials" />
      </Page>
    </>
  );
}
