import "./Testimonials.css";
import start from "../../assets/images/star.png";
import user from "../../assets/images/user.png";

export default function Testimonials() {
  const clients = [
    {
      id: 1,
      name: "Bob",
      review: "Cool place",
      rating: "5",
    },
    {
      id: 2,
      name: "Rick",
      review: "I like eating here",
      rating: "5",
    },
    {
      id: 3,
      name: "Carl",
      review: "Best place ever!!!",
      rating: "5",
    },
    {
      id: 4,
      name: "Negan",
      review: "I like tomato soup",
      rating: "4",
    },
  ];
  return (
    <section className="testimonials">
      <div className="inner">
        <h1>Testimonials</h1>
        <div>
          {clients.map((client) => (
            <div key={client.id}>
              <div className="raiting">
                <span>{client.rating}</span>
                <img src={start} alt="start" />
              </div>
              <div className="bio">
                <img src={user} alt="user" />
                <span>{client.name}</span>
              </div>
              <span>{client.review}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
