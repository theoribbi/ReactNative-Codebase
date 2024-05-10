import { useEffect, useState } from "react";
import { nowToHHMM } from "../../services/date-service";
import { CustomText } from "../CustomText/CustomText";
import { s } from "./Clock.style";

export const Clock = () => {
  const [time, setTime] = useState(nowToHHMM());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <CustomText style={s.time}>{time}</CustomText>;
};
