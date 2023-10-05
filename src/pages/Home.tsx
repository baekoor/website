import "./home.css";
import FadeIn from "react-fade-in/lib/FadeIn";

export default function Home() {
  return (
    <FadeIn delay={300}>
      <h1 className="welcome">Welcome</h1>
      <h3 className="subtex">
        This website was a personal project to learn React.ts, happy to have you
        here though!
      </h3>
    </FadeIn>
  );
}
