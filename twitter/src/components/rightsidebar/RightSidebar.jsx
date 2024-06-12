import React from "react";
import "./rightSidebar.css";
import { profilepic, mediapic } from "../sidebar/imports";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="right-sidebar__search">
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="right-sidebar__section">
        <h3 className="trend">What's happening</h3>
        <div className="trend">
          <p style={{ color: "#5B7083" }}>COVID19 - Last night</p>
          <div className="trend-content">
            <strong>
              England's Chief Medical Officer says the UK is at the most
              dangerous time of the pandemic
            </strong>
            <img src={mediapic} alt="covid" />
          </div>
          <p className="trend-link">
            Trending with <span className="hashtag">#covid19</span>
          </p>
        </div>

        
        <div className="trend">
          <p style={{ color: "#5B7083" }}>US news - 4h ago</p>
          <div className="trend-content">
            <strong>
              Parler may go offline following suspensions by Amazon, Apple, and
              Google
            </strong>
            <img src={mediapic} alt="covid" />
          </div>
          <p className="trend-link">
            Trending with <span className="hashtag">#trump</span>
          </p>
        </div>


        <div className="trend">
          <p style={{ color: "#5B7083" }}>India - 1h ago</p>
          <div className="trend-content">
            <strong>
              India vs Australia: India hold on to earn a draw on Day 5 in
              Sydney Test
            </strong>
            <img src={mediapic} alt="covid" />
          </div>
          <p className="trend-link">
            Trending with <span className="hashtag">#sport</span>
          </p>
        </div>
        <a href="#" className="show-more">
          Show more
        </a>
      </div>
      <div className="right-sidebar__section">
        <h3>Who to follow</h3>
        <div className="follow-suggestion">
          <img src={profilepic} alt="Bessie Cooper" />
          <div>
            <strong>Bessie Cooper</strong>
            <p style={{ color: "#5B7083" }}>@alessandroveronezi</p>
          </div>
          <button>Follow</button>
        </div>
        <div className="follow-suggestion">
          <img src={profilepic} alt="Jenny Wilson" />
          <div>
            <strong>Jenny Wilson</strong>
            <p style={{ color: "#5B7083" }}>@gabrielcantarin</p>
          </div>
          <button>Follow</button>
        </div>
        <a href="#" className="show-more">
          Show more
        </a>
      </div>
      <div className="right-sidebar__footer">
        <p>Terms of Service Privacy Policy Cookie Policy</p>
        <p>Ads info More © 2021 Twitter, Inc.</p>
      </div>
    </div>
  );
};

export default RightSidebar;
