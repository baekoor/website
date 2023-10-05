import me from "./me.jpg";
import "./about.css";
import FadeIn from "react-fade-in/lib/FadeIn";
import ImageCarousel from "./ImageCarousel";
import pebby from "./pebby.jpg";
import trooper from "./trooper.jpg";
import both from "./both.jpg";
import board from "./board.jpg";
import board1 from "./board1.jpg";
import board2 from "./board2.jpg";
import board3 from "./board3.jpg";

export default function About() {
  const containerStyle1 = {
    display: "grid",
    placeItems: "center",
    maxWidth: "40rem",
    backgroundColor: "rgba(25,25,25,1)",
    color: "white",
    minWidth: "220px",
    justifyContent: "center", // Center content horizontally
    alignItems: "center", // Center content vertically
  };

  const containerStyle2 = {
    display: "grid",
    placeItems: "center",
    maxWidth: "38rem",
    backgroundColor: "rgba(25,25,25,1)",
    color: "white",
    minWidth: "220px",
    justifyContent: "center", // Center content horizontally
    alignItems: "center", // Center content vertically
  };

  const carousel1 = [pebby, trooper, both];
  const carousel2 = [board1, board, board2, board3];

  const imageStyle = {
    width: "105%",
    height: "auto",
  };

  return (
    <div className="grid-container">
      <FadeIn delay={100}>
        <div className="bubble-box" style={containerStyle1}>
          <img
            src={me}
            className="rounded float-end"
            alt="picture of me"
            style={imageStyle}
          />
          <div className="card-body">
            <p className="card-text">
              My name is Alek Russa, Im a Junior at Michigan State University
              majoring in Computer Science. I enjoy snowboarding, longboarding,
              and of course playing video games. Ive long had a passion for
              creating as well as solving problems, and through Computer Science
              I discovered that was an career option.
            </p>
          </div>
        </div>
        <FadeIn delay={150}>
          <div className="bubble-box-und" style={containerStyle2}>
            <h4 className="dogs">Snowboarding Photos</h4>
            <ImageCarousel images={carousel2} />
          </div>
        </FadeIn>
      </FadeIn>
      <FadeIn delay={200}>
        <div className="bubble-box-und2" style={containerStyle2}>
          <div className="top-right">
            <h4 className="dogs">Pet Gallary</h4>
            <ImageCarousel images={carousel1} />
            <div className="dogtxt">
              Above are some pictures of our families three dogs; Pebby,
              Trooper, and Dakota
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
