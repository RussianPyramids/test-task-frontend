import { FC } from "react";
import { Card } from "../../components/card";
import styles from "./index.module.css";

import clsx from "clsx";
import { useGetCards } from "../../hooks/useGetCards";

export const CardsContainer: FC = () => {
  const {
    cards,
    onToggleFilter: handleToggleFilter,
    isFilterActive,
  } = useGetCards();

  return (
    <>
      <div className={styles.title__container}>
        <h1>CATALOG</h1>
        <button
          onClick={handleToggleFilter}
          className={clsx(
            styles.show__filtered_button,
            isFilterActive && styles.show__filtered_button__active
          )}
          type="button"
        >
          Show liked products
        </button>
      </div>
      <div className={styles.grid_container}>
        {cards != null &&
          cards.length > 0 &&
          cards.map((card) => <Card card={card} key={card.id} />)}
      </div>
    </>
  );
};
