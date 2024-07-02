export const getCurrentVancouverTimeString = (): string => {
  const currentTime: Date = new Date(
    new Date().toLocaleString("en-US", { timeZone: "America/Vancouver" })
  );
  const hours: number = currentTime.getHours();
  const minutes: number = currentTime.getMinutes();
  const ampm: string = hours >= 12 ? "PM" : "AM";
  const formattedHours: number = hours % 12 || 12;
  const formattedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds: number = currentTime.getSeconds();
  const formattedSeconds: string = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const currentTimeString: string = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm}`;

  return currentTimeString;
};
