import { useCallback, useEffect, useState } from "react"
import { DESKTOPWIDTH, PADWIDTH ,MOBILEWIDTH, DESKTOPCOUNT, PADCOUNT, MOBILECOUNT, DESKTOPCOUNTSIZE, PADCOUNTSIZE, MOBILECOUNTSIZE } from "../../utils/constants";

export default function useCounterCard(defaultCount) {
  const [count, setCount] = useState(defaultCount);
  const [stepSize, setStepSize] = useState(0);

  const step = () => {
    setCount(count + stepSize);
  }

  const handleResize = useCallback(() => {
    if (window.innerWidth >= DESKTOPWIDTH) {
      setCount(DESKTOPCOUNT);
      setStepSize(DESKTOPCOUNTSIZE);
    }
    if (window.innerWidth >= PADWIDTH && window.innerWidth < DESKTOPWIDTH) {
      setCount(PADCOUNT);
      setStepSize(PADCOUNTSIZE);
    }
    if (window.innerWidth >= MOBILEWIDTH && window.innerWidth < PADWIDTH) {
      setCount(MOBILECOUNT);
      setStepSize(MOBILECOUNTSIZE);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize])

  return { count, step }
};