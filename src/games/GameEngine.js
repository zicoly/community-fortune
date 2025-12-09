export const processGameResult = (score, mode) => {
  let reward = 0;

  if (mode === "free") {
    reward = Math.floor(score / 5) * 10; // earn points
  }

  if (mode === "paid") {
    reward = score > 30 ? 50 : 20; // example reward values
  }

  if (mode === "referral") {
    reward = score > 20 ? 25 : 10;
  }

  return {
    pointsEarned: reward,
    score,
    mode,
  };
};
