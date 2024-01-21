import { createAsyncThunk } from "@reduxjs/toolkit";
import { Card, cardDomain } from "./types";

export const getCards = createAsyncThunk(`${cardDomain}/getCards`, async () => {
  const response = await fetch("https://fakestoreapi.com/products");

  const data = (await response.json()) as Card[];

  return data;
});

export const getCard = createAsyncThunk(
  `${cardDomain}/getCard`,
  async (id: string) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = (await response.json()) as Card;

    return data;
  }
);
