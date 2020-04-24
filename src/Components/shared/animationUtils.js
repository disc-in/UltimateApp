export const elementsSize = (animationWidth, animationHeight) => {
  const dimensionMin = Math.min(animationWidth, animationHeight);
  const playerRadius = dimensionMin / 12;
  const discRadius = 200;
  const coneSize = (playerRadius * 5) / 16;
  const bottomconeSize = (playerRadius * 10) / 16;
  const borderWidth = discRadius / 10;

  return { dimensionMin, playerRadius, discRadius, coneSize, bottomconeSize, borderWidth };
};
