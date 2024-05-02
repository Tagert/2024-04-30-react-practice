import styles from "./styles/Main.module.css";
import { Card } from "../Card/Card.jsx";
import { Button } from "../Button/Button.jsx";
import { Description } from "../Description/Description.jsx";
import { useState } from "react";

const Main = () => {
  const [cards, setCards] = useState([
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZaHSKllluFQfJlRAtrm8NqqzT33ddkjT0o2-rxx7-sg&s",
      title: "Idea",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maiores accusamus autem rem harum minus expedita nemo unde!",
    },
    {
      imgUrl:
        "https://cdn.dribbble.com/users/258975/screenshots/2874402/scene-visual-prototype-2_.jpg",
      title: "Drafting",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolorem deserunt dolore voluptatem mollitia cumque.",
    },
    {
      imgUrl:
        "https://chisellabs.com/glossary/wp-content/uploads/2021/07/What-is-a-Prototype.jpeg",
      title: "Creation",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quia, corporis quam laborum delectus explicabo vel.",
    },
  ]);

  const [cardsAdditional, setCardsAdditional] = useState([
    {
      imgUrl:
        "https://miro.medium.com/v2/resize:fit:1200/1*5fB_KSkm9_dqdfSNTJY5lQ.png",
      title: "Prototype",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, est. Accusamus veritatis nesciunt minus a, sit exercitationem!",
    },
    {
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8sI3rfAIHGKPJbLB1sFuJrUhuewypPIeQeojo9tCIg&s",
      title: "Launch",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae repudiandae illo dolores cupiditate hic, quisquam perspiciatis ratione saepe.",
    },
  ]);

  const [work, setWork] = useState("HOW WE WORK");

  const [textVisible, setTextVisible] = useState(true);

  return (
    <main className={styles.container}>
      <div className={styles.description}>
        <h2>
          {work}

          <Button
            onClick={() => {
              setWork(textVisible ? "WE WORK HARD" : "HOW WE WORK");
              setTextVisible(!textVisible);

              setTimeout(() => {
                setWork("HOW WE WORK");
                setTextVisible(true);
              }, 5000);
            }}
            btnText={textVisible ? "?" : "!"}
          />
        </h2>

        <Description
          text={
            "Viverra nam libero justo laoreet sit. Nisl nunc mi ipsum faucibus. Ut ornare lectus sit amet est placerat in egestas. Felis donec et odio pellentesque. Eget arcu dictum varius duis at consectetur lorem donec massa. Vitae auctor eu augue ut lectus arcu bibendum at varius. Tellus pellentesque eu tincidunt tortor aliquam nulla. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit."
          }
        />
      </div>

      <div className={styles.cardWrapper}>
        {cards.map((card) => {
          return (
            <Card
              imgUrl={card.imgUrl}
              title={card.title}
              text={card.text}
              onClick={() => {
                console.log(card.title);
              }}
            />
          );
        })}
      </div>

      <div className={styles.cardContainer}>
        <div className={styles.cardGroup}>
          {cardsAdditional.map((card) => {
            return (
              <Card
                imgUrl={card.imgUrl}
                title={card.title}
                text={card.text}
                onClick={() => {
                  console.log(card.title);
                }}
              />
            );
          })}
        </div>

        <div className={styles.cardHolder}>
          <img
            src="https://lawkm.com/wp-content/uploads/2017/08/shutterstock_440496118.jpg"
            alt=""
            srcset=""
          />
        </div>
      </div>

      <div className={styles.additionalBg}></div>
    </main>
  );
};

export { Main };
