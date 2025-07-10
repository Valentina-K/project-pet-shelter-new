import { useState, useEffect, useRef } from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const media = window.matchMedia(query);
    const handleChange = () => setMatches(media.matches);

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, [query]);

  return matches;
};

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export const useTextClamp = ({ maxHeight, ellipsis = ' ...' }) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const originalText = element.textContent || '';
    let left = 0;
    let right = originalText.length;
    let best = originalText.length;

    // Сброс до полного текста
    element.textContent = originalText;
    while (left <= right || left === maxHeight || right === maxHeight) {
      const mid = Math.floor((left + right) / 2);
      const candidate = originalText.slice(0, mid).trim() + ellipsis;
      element.textContent = candidate;

      if (element.clientHeight <= maxHeight) {
        best = mid;
        left = mid + 1; // пробуем взять больше текста
      } else {
        right = mid - 1; // слишком много — уменьшаем
      }
    }
    element.textContent = originalText.slice(0, best).trim() + ellipsis;
  }, [maxHeight, ellipsis]);

  return elementRef;
};
