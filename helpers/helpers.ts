export function getLaunchDate() {
  const result = new Date();
  result.setDate(result.getDate() + 14);
  return result;
}

export type RemainingTime = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function getRemainingTimeFromDate(
  date: Date | undefined
): RemainingTime {
  const remainingTime = date ? date.getTime() - Date.now() : 0;
  const result =
    remainingTime > 0
      ? {
          days: Math.floor(remainingTime / 1000 / 60 / 60 / 24),
          hours: Math.floor(remainingTime / 1000 / 60 / 60) % 24,
          minutes: Math.floor(remainingTime / 1000 / 60) % 60,
          seconds: Math.floor(remainingTime / 1000) % 60,
        }
      : {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
  return result;
}
