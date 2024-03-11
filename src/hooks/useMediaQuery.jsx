import { useEffect, useState } from "react";

const useMediaQuery = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleScreenSize = () => {
    if (window.innerWidth < 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleScreenSize();

    document.addEventListener("resize", handleScreenSize);

    return () => {
      document.removeEventListener("resize", handleScreenSize);
    };
  }, []);
  return {
    isMobile,
  };
};

export default useMediaQuery;
