import Driver from "./types";

const rating = (aDriver: Driver) => {
  return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
};

const moreThanFiveLateDeliveries = (aDriver: Driver) => {
  return aDriver.numberOfLateDeliveries > 5;
};

export default rating;
