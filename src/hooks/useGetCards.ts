import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { cardsSelector, likedCardsSelector } from "../store/card/selectors";
import { getCards } from "../store/card/actions";
import { useAppDispatch } from "../store/card/hooks";

export const useGetCards = () => {
  const dispatch = useAppDispatch();
  const [isFilterActive, setIsFilterActive] = useState(false);
  const cards = useSelector(cardsSelector);
  const likedCards = useSelector(likedCardsSelector);

  const filteredCards = isFilterActive ? likedCards : cards;

  const onToggleFilter = useCallback(() => {
    setIsFilterActive((previousState) => !previousState);
  }, []);

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return { cards: filteredCards, onToggleFilter, isFilterActive };
};
