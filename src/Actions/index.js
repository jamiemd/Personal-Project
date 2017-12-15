export const NEXT_CARD = "NEXT_CARD";

export const nextCard = card => {
  console.log(card);
  return {
    type: NEXT_CARD,
    payload: card
  };
};
