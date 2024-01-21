import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Card, cardInitialState } from "./types";
import { getCard, getCards } from "./actions";

export const cardSlice = createSlice({
  name: "cards",
  initialState: cardInitialState,
  reducers: {
    deleteItem: (draft, { payload }: PayloadAction<Card>) => {
      draft.cards = draft.cards.filter((card) => card.id !== payload.id);
      draft.likedItems = draft.likedItems.filter(
        (card) => card.id !== payload.id
      );
    },
    likeItem: (draft, action: PayloadAction<Card>) => {
      draft.likedItems?.push(action.payload);
    },
    unlikeItem: (draft, action: PayloadAction<Card>) => {
      draft.likedItems = draft.likedItems?.filter(
        (card) => card.id !== action.payload.id
      );
    },
  },
  extraReducers({ addCase }) {
    addCase(getCards.fulfilled, (draft, { payload }) => {
      draft.cards = payload;
    });

    addCase(getCard.fulfilled, (draft, { payload }) => {
      draft.card = payload;
    });
  },
});
