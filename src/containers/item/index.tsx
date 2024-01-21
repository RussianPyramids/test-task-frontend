import { FC } from "react";
import styles from "./index.module.css";
import { useGetCard } from "../../hooks/useGetCard";

export const ItemContainer: FC = () => {
  const { card } = useGetCard();

  if (!card) {
    return <div>Card not found</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{card.title}</h1>
      <img src={card.image} alt={card.title} className={styles.img} />
      <p className={styles.description}>{card.description}</p>
      <span>{card.price} $</span>
    </div>
  );
};
