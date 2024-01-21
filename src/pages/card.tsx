import { FC } from "react";
import { useGetCard } from "../hooks/useGetCard";

export const CardPage: FC = () => {
  const { card } = useGetCard();

  if (!card) {
    return <div>Card not found</div>;
  }

  return <div>Card {card.id}</div>;
};
