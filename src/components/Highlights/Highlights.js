import "./Highlights.css";
import salad from "../../assets/images/greek_salad.jpg";
import dessert from "../../assets/images/lemon_dessert.jpg";
import bruchetta from "../../assets/images/bruchetta.jpg";
import motorbike from "../../assets/images/motorbike.png";

export default function Highlights() {
  const highlights = [
    {
      id: 1,
      img: salad,
      title: "Greek salad",
      price: "12.99",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    },
    {
      id: 2,
      img: bruchetta,
      title: "Bruchetta",
      price: "5.99",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
    },
    {
      id: 3,
      img: dessert,
      title: "Lemon Dessert",
      price: "5.00",
      description:
        "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    },
  ];
  return (
    <section className="highlights">
      <div className="title">
        <h1>This weeks specials!</h1>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {highlights.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt="dishIcon" />
            <div>
              <div>
                <h3>{item.title}</h3>
                <span>${item.price}</span>
              </div>
              <p>{item.description}</p>
              <button>
                <span>Order a delivery</span>{" "}
                <img src={motorbike} alt="motorbike" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
