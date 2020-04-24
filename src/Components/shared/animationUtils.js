export const range = (min, max) => {
  return new Array(max - min).fill(0).map((_, i) => min + i);
};

export const elementsSize = (animationWidth, animationHeight) => {
  const dimensionMin = Math.min(animationWidth, animationHeight);
  const playerRadius = dimensionMin / 12;
  const discRadius = 200;
  const coneSize = (playerRadius * 5) / 16;
  const bottomconeSize = (playerRadius * 10) / 16;
  const borderWidth = discRadius / 10;

  return { dimensionMin, playerRadius, discRadius, coneSize, bottomconeSize, borderWidth };
};

export const sameAnimationDrill = (drill1, drill2) => {
  var stepId = 0;
  var elemId = 0;
  var cutId = 0;
  var isEqual = true;

  if (drill1 === undefined || drill2 === undefined) return true;

  // Get all the positions in props and stats
  var pPositions = drill1.positions;
  var sPositions = drill2.positions;

  // If there is not the same number of steps
  if (pPositions.length !== sPositions.length) isEqual = false;

  // While no difference has been found and all the positions have not been tested
  while (stepId < pPositions.length && isEqual) {
    if (pPositions.length !== sPositions.length) isEqual = false;

    if (isEqual && pPositions[stepId].length !== sPositions[stepId].length) isEqual = false;

    if (isEqual && pPositions[stepId].length > elemId) {
      var pUndefined = pPositions[stepId][elemId] === undefined;
      var sUndefined = sPositions[stepId][elemId] === undefined;

      var pSize = -1;
      var sSize = -1;

      if (!pUndefined) pSize = pPositions[stepId][elemId].length;

      if (!sUndefined) sSize = sPositions[stepId][elemId].length;

      // If the position is different
      if (
        pSize !== sSize ||
        (pSize > 0 &&
          (pPositions[stepId][elemId][cutId][0] !== sPositions[stepId][elemId][cutId][0] ||
            pPositions[stepId][elemId][cutId][1] !== sPositions[stepId][elemId][cutId][1]))
      )
        isEqual = false;
    }

    // Go to the next position
    if (pPositions[stepId][elemId] === undefined) {
      if (pPositions[stepId].length > elemId + 1) elemId++;
      else {
        stepId++;
        elemId = 0;
        cutId = 0;
      }
    } else if (pPositions[stepId][elemId].length > cutId + 1) cutId++;
    else if (pPositions[stepId].length > elemId + 1) {
      elemId++;
      cutId = 0;
    } else {
      stepId++;
      elemId = 0;
      cutId = 0;
    }
  }

  return isEqual;
};
