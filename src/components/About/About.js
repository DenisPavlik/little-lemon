import "./About.css";
import mens1 from "../../assets/images/mens1.jpg";
import mens2 from "../../assets/images/mens2.jpg";

export default function About() {
  return (
    <section className="about">
      <div className="info">
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.{" "}
        </p>
      </div>
      <div className="images">
        <img src={mens2} alt="mens2" />
        <img className="mens1" src={mens1} alt="mens1" />
      </div>
    </section>
  );
}
