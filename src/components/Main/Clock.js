import { useState, useEffect, useRef } from "react";

export default function Clock() {
  const [time, setTime] = useState(() => new Date());

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return <div className="Clock__face">{time.toLocaleTimeString()}</div>;
}
