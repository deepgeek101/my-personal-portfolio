import { useEffect, useState } from "react";
import { site } from "../content/site";

const format = new Intl.DateTimeFormat("en-GB", {
  timeZone: site.location.timeZone,
  hour: "2-digit",
  minute: "2-digit",
  hourCycle: "h23",
});

// The current time where Deep is, e.g. { time: "14:05", hour: 14 }.
// Re-checks every 30 seconds, which is plenty for a clock without seconds.
const useKathmanduTime = () => {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30_000);
    return () => clearInterval(id);
  }, []);

  const hour = Number(
    format.formatToParts(now).find((part) => part.type === "hour").value
  );

  return { time: format.format(now), hour };
};

export default useKathmanduTime;
