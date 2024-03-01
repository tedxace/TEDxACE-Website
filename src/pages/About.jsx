import { faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './about.css';

const About = () => {
  return (
    <main>
      <div class="about_section">
        <div class="about_top">
            <p>ABOUT</p>
        </div>
        <div class="about_mid">
            <p class="title" >About TEDx, x = independently organized event</p>
            <p class="subtitle">In the spirit of ideas worth spreading, TEDx is a program of local, self-organized events that bring people together to share a TED-like experience. At a TEDx event, TED Talks video and live speakers combine to spark deep discussion and connection. These local, self-organized events are branded TEDx, where x = independently organized TED event. The TED Conference provides general guidance for the TEDx program, but individual TEDx events are self-organized. (Subject to certain rules and regulations.)</p>
        </div>
        <div class="about_bottom">
            <p class="title" >About TED</p>
            <div class="about_bottom_container">
                <div class="container_left">
                    <p class="subtitle">
                        TED is a nonprofit organization devoted to Ideas Worth Spreading. Started as a four-day conference in California 30 years ago, TED has grown to support its mission with multiple initiatives. The two annual TED Conferences invite the world's leading thinkers and doers to speak for 18 minutes or less. Many of these talks are then made available, free, at TED.com. TED speakers have included Bill Gates, Jane Goodall, Elizabeth Gilbert, Sir Richard Branson, Nandan Nilekani, Philippe Starck, Ngozi Okonjo-Iweala, Sal Khan and Daniel Kahneman.
                    </p>
                </div>
                <div class="container_right">
                    <p class="subtitle">
                        The annual TED Conference takes place each spring in Vancouver, British Columbia. TED's media initiatives include TED.com, where new TED Talks are posted daily; TED Translators, which provides subtitles and interactive transcripts as well as translations from volunteers worldwide; the educational initiative TED-Ed. TED has established The Audacious Project that takes a collaborative approach to funding ideas with the potential to create change at thrilling scale; TEDx, which supports individuals or groups in hosting local, self- organized TED-style events around the world, and the TED Fellows program, helping world-changing innovators from around the globe to amplify the impact of their remarkable projects and activities.    
                    </p>
                </div>
            </div>

        </div>
          <div class="social_blades">
            <p>Follow TED on</p>
            <div class="social_container">
              <a href="https://www.youtube.com/@TEDx" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a>

              <a href="https://www.instagram.com/tedxace/" target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a href="https://www.linkedin.com/company/tedxace/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
      </div>
      <div className="yt_container">
        <p className="yt_title">Some Glimpses of our Past Events</p>
        <div className="wrapper">
          <div className="yt_video">
            <iframe width="420" height="315"src="https://www.youtube.com/embed/KeQRirsphKo?si=aodHOLrkcxn-qwXN">
            </iframe>
            <p className="yt_video_title" >2023</p>
          </div>
          <div className="yt_video">
          <iframe width="420" height="315"src="https://www.youtube.com/embed/tgbNymZ7vqY">
            </iframe>
            <p className="yt_video_title" >2022</p>
          </div>
          <div className="yt_video">
            <iframe width="420" height="315"src="https://www.youtube.com/embed/TLlDOCexrN0?si=Kd1lncXo-nY0l41r">
            </iframe>
            <p className="yt_video_title" >2021</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
