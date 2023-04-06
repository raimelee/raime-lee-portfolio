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
          <p>
            <em>I am Raime</em>, a full stack web developer with experience in
            design, marketing, copywriting, and fine art. This spring in
            response to world and personal events, I was looking for a way to
            make a greater difference in the world with my existing skill set,
            when coding found me through a passing conversation. Soon after this
            introduction, I enrolled in a 14-week full-time web development
            bootcamp and graduated in September of 2022. Code is my new medium,
            and with it, I hope to paint new possibilities and inspiring
            experiences that equitably advance humanity and positively impact
            the contexts in which we live.
          </p>
        </section>
      </div>
    </>
  );
};

export default About;
