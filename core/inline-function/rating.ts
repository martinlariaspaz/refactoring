import Driver from "./types";

const rating = (aDriver: Driver) => {
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
};

export default rating;
