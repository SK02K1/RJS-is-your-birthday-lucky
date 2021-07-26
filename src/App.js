import { useState } from "react";
import "./styles.css";
import instaIcon from "./assets/Instagram_white.svg";
import linkedInIcon from "./assets/LinkedIN_white.svg";
import twitterIcon from "./assets/Twitter_white.svg";
import githubIcon from "./assets/Github_white.svg";

let DateOfBirth = "";
let luckyNumber = "";
let result = "";
let graphicLink = "/";

export default function App() {
  const [message, setMessage] = useState("");

  const convertDateToNum = (date) => {
    const arrOfDateElements = date.split("-");
    return parseInt(arrOfDateElements.join(""), 10);
  };

  const getSumOfDigits = (num) => {
    let sum = 0;
    while (num !== 0) {
      let rem = num % 10;
      sum += rem;
      num = (num - rem) / 10;
    }
    return sum;
  };

  const checkLuck = (sum, num) => {
    if (sum % num === 0) {
      return true;
    } else {
      return false;
    }
  };

  const checkBtnClickHandler = () => {
    if (
      DateOfBirth !== "" &&
      luckyNumber !== "" &&
      parseInt(luckyNumber, 10) > 0 &&
      Number.isInteger(parseFloat(luckyNumber))
    ) {
      const num = convertDateToNum(DateOfBirth);
      const sumOfDigits = getSumOfDigits(num);
      result = checkLuck(sumOfDigits, parseInt(luckyNumber, 10));
      if (result) {
        graphicLink =
          "https://64.media.tumblr.com/cac6ac2ee6a37e7d0b87b3fff49c7c78/1706aef558b99f68-2f/s540x810/ebd0c78de095e5f0a9a3a64e42a9efa0d36da8a6.gifv";
        setMessage("🤩 WoW you are a lucky person");
      } else {
        graphicLink =
          "https://media1.tenor.com/images/47bf1eb18ce20acee451b0513fa228f3/tenor.gif?itemid=11746329";
        setMessage("😔 Sorry, but your birthday is not a lucky number");
      }
    } else {
      graphicLink = "/";
      setMessage("");
    }
  };

  const resetBtnClickHandler = () => {
    DateOfBirth = "";
    luckyNumber = "";
    graphicLink = "/";
    setMessage("");
  };

  return (
    <div className="App">
      <h1>
        {" "}
        <span role="img" aria-label="birthday cake">
          🎂
        </span>{" "}
        is your birthday lucky?
      </h1>
      <small>
        <span>Privacy notice</span> - we are not storing any data.
      </small>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="dob">
          DOB
          <input
            onChange={(e) => {
              DateOfBirth = e.target.value;
            }}
            type="date"
            id="dob"
            name="dob"
            required
          />
        </label>
        <label htmlFor="lucky-number">
          Lucky number
          <input
            onChange={(e) => {
              luckyNumber = e.target.value;
            }}
            type="number"
            min="1"
            id="lucky-number"
            name="lucky-number"
            placeholder="Enter your lucky number"
            required
          />
        </label>
        <button onClick={checkBtnClickHandler} type="submit">
          Check
        </button>
        <button onClick={resetBtnClickHandler} type="reset">
          Reset
        </button>
      </form>
      <div className="output-container">{message}</div>
      <img className="graphic" src={graphicLink} alt="" />
      <footer>
        <div>
          <a href="https://github.com/SK02K1" target="_blank" rel="noreferrer">
            <img src={githubIcon} alt="github-icon" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/sk02k1" target="_blank" rel="noreferrer">
            <img src={twitterIcon} alt="twitter-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/sourabh-kheraliya-b2571b1a2/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedInIcon} alt="linkedin-icon" />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/sourabh_kheraliya/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instaIcon} alt="instagram-icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}
