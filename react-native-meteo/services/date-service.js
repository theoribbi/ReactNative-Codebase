export const nowToHHMM = () => {
  const d = new Date();
  return `${d.getHours().toString().padStart(2, 0)}:${d
    .getMinutes()
    .toString()
    .padStart(2, 0)}`;
};

export const DAYS = ["LUN", "MAR", "MER", "JEU", "VEN", "SAM", "DIM"];

export const dateToDDMM = (date) => {
  return `${date.getDate()}/${date.getMonth() + 1}`;
};
