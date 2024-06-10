import { useEffect } from "react";

const useDynamicTitle = (title) => {
  useEffect(() => {
    window.document.title = `${title} - Use ME`;
  }, [title]);
};

export default useDynamicTitle;
