import { RootState } from "..";
import { Card } from "./types";

export const cardSelector = (state: RootState): Card | undefined =>
  state.cards.card;

export const cardsSelector = (state: RootState): Card[] | undefined =>
  state.cards.cards;

export const likedCardsSelector = (state: RootState): Card[] | undefined =>
  state.cards.likedItems;
