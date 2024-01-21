export interface Card {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface CardInitialState {
  cards: Card[];
  likedItems: Card[];
  card?: Card;
}

export const cardInitialState: CardInitialState = {
  likedItems: [],
  cards: [],
};

export const cardDomain = "card" as const;
