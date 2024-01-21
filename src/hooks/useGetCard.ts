import { useEffect } from "react";
import { useAppDispatch } from "../store/card/hooks";
import { useSelector } from "react-redux";
import { cardSelector } from "../store/card/selectors";
import { getCard } from "../store/card/actions";
import { useParams } from "react-router-dom";

export const useGetCard = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const card = useSelector(cardSelector);
  console.log({ id, card });

  useEffect(() => {
    if (id) {
      dispatch(getCard(id));
    }
  }, [dispatch, id]);

  return { card };
};
