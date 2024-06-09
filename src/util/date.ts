export const getCurrentVancouverTimeString = (): string => {
  const currentTime: Date = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Vancouver" })
  );
  const hours: number = currentTime.getHours();
  const minutes: number = currentTime.getMinutes();
  const ampm: string = hours >= 12 ? "PM" : "AM";
  const formattedHours: number = hours % 12 || 12;
  const formattedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const currentTimeString: string = `${formattedHours}:${formattedMinutes} ${ampm}`;

  return currentTimeString;
};
