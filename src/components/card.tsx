import styles from "./card.module.css";
import { Link } from "react-router-dom";
import { FC, MouseEventHandler, useCallback } from "react";
import { LikeIcon } from "./like";
import { Card as CardType } from "../store/card/types";
import { cardSlice } from "../store/card/card";
import { useAppDispatch } from "../store/card/hooks";
import { useSelector } from "react-redux";
import { likedCardsSelector } from "../store/card/selectors";
import clsx from "clsx";

interface CardProps {
  card: CardType;
}

export const Card: FC<CardProps> = ({ card }) => {
  const { description, id, image, price, title } = card;

  const dispatch = useAppDispatch();
  const likedCards = useSelector(likedCardsSelector);
  const isLiked = likedCards?.find((card) => card.id === id);

  const handleLike = useCallback(() => {
    dispatch(cardSlice.actions.likeItem(card));
  }, [card, dispatch]);

  const handleDislike = useCallback(() => {
    dispatch(cardSlice.actions.unlikeItem(card));
  }, [card, dispatch]);

  const handleClickIcon = useCallback<MouseEventHandler>(
    (event) => {
      event.preventDefault();
      console.log(isLiked);

      if (isLiked) {
        handleDislike();
      } else {
        handleLike();
      }
    },
    [handleDislike, handleLike, isLiked]
  );

  const handleDeleteItem = useCallback<MouseEventHandler>(
    (event) => {
      event.preventDefault();
      dispatch(cardSlice.actions.deleteItem(card));
    },
    [dispatch, card]
  );

  return (
    <Link to={`/card/${id}`} className={styles.card_container}>
      <button
        className={styles.delete__button}
        onClick={handleDeleteItem}
        type="button"
      >
        X
      </button>
      <img src={image} alt={title} className={styles.img} />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <div className={styles.price_container}>
        <p className={styles.price}>{price} ₽</p>
        <button
          className={clsx(styles.like__button, isLiked && styles.liked__button)}
          onClick={handleClickIcon}
          type="button"
        >
          <LikeIcon />
        </button>
      </div>
    </Link>
  );
};
