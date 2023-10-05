import smart3 from "./smart3.jpg";
import hxdiv from "./hxdiv.jpg";
import term from "./terminal.jpg";
import uni from "./unicode.jpg";
import FadeIn from "react-fade-in/lib/FadeIn";
import "./proj.css";

export default function proj() {
  return (
    <FadeIn>
      <div className="listcon">
        <ul>
          <li className="list-group-head">
            <h4>Smart 3 Version Control Tool</h4>
          </li>
          <li className="list-group-item">
            This was the first tool I created in a software engineering
            workplace enviroment. I was tasked with creating an OS independant
            GUI which takes binary data files and compiles them for Version
            Control. This was a major learning experience as I was required to
            learn new libraries as well as call multipled executables and .so's
            in order to compile, compress and encrypt the necessaary
            information.
          </li>
          <li className="list-group-item">
            <div className="ssgui">GUI interface image below</div>
            <img src={smart3} className="smart3" />
          </li>
          <li className="list-group-item">
            As displayed above the program takes in user input as well as two
            files in order to create a metadata header to describe where things
            are located. This is then compressed and encrypted using XZ and
            AES-128 with a randomized IV which is displayed here due to verbose
            being checked
            <br></br>
            <img src={term} alt="term" className="term" />
            <br></br>
            Pariring this information with HDX to view the raw data, we are able
            to verify that the IV is encoded in the first 16 bytes.
            <br></br>
            <img src={hxdiv} alt="hxd" className="hxd" />
            <br></br>
          </li>
          <li className="list-group-item">
            And finally, an example of the encrypted output is displayed below{" "}
            <br></br>
            <img src={uni} alt="uni" className="uni" />
          </li>
        </ul>
      </div>
      <div className="space"></div>
    </FadeIn>
  );
}
