import "../styles/About.css";
import Raime from "../assets/raime-color-portrait.jpg";

const About = () => {
  return (
    <>
      <div class="headline-container">
        <p class="headline">
          Analytically creative mind in pursuit of life-long learning and
          growth.
        </p>
        <div class="line-light"></div>
      </div>
      <div class="content">
        {/* <div class="portrait-container">
          <img
            src={Raime}
            alt="portrait of raime"
            class="site-images"
            id="raime-portrait"
          />
        </div> */}
        <figure class="portrait-container">
          <img
            src={Raime}
            alt="portrait of raime"
            class="site-images"
            id="raime-portrait"
            href="https://www.laveer.us"
            target="_blank"
            rel="noreferer"
          />
          <figcaption id="ag-credit">
            Photography courtesy of{" "}
            <a href="https://www.laveer.us" target="_blank" rel="noreferer">
              <span>Andrew Gulledge</span>
            </a>
          </figcaption>
        </figure>
        <section class="bio">
          <h2>Raime Lee</h2>
          <div class="line-dark"></div>
          <h3>Full Stack Visual Creative</h3>
          <p className="bio-text">
            <span className="bio-emphasis">I am Raime</span>, a self-motivated,
            developer and designer with experience in graphic and web design,
            marketing, copywriting, and fine art. In response to world and
            personal events in 2022, I was looking for a way to make a greater
            difference with my existing skillset, when I enrolled in and
            graduated from a 14-week full-time web development bootcamp. This
            new medium of code, combined with my visual expertise,
            determination, empathy, and strategic mindset, allows me to paint
            new possibilities and inspiring, user-centered experiences that
            equitably advance humanity and positively impact the contexts in
            which we live.
          </p>
        </section>
      </div>
    </>
  );
};

export default About;
