import "./Subscribe.css"
import Buttons from "../Buttons/Buttons";

const Subscribe = () => {
  return (
      <div className="subscribe container" id="subscribe">
          <h2 className="main-heading">
              Hurry up! Subscribe our newsletter <br />
              and get 25% Off
          </h2>
          <p>Limited time offer for this month. No credit card required</p>
          <div className="contact-subscribe">
              <input
                  type="email"
                  name="email"
                  placeholder="Email Address here"
              />
              <Buttons> Subscribe</Buttons>
          </div>
      </div>
  );
}

export default Subscribe