
import { useState, useEffect, useRef, RefObject } from "react";

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

interface UseInViewResult {
  ref: RefObject<HTMLElement>;
  inView: boolean;
}

export function useInView({
  threshold = 0.1,
  rootMargin = "0px",
  triggerOnce = false,
}: UseInViewOptions = {}): UseInViewResult {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const previouslyInView = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isInView = entry.isIntersecting;
        
        if (triggerOnce) {
          if (isInView && !previouslyInView.current) {
            setInView(true);
            previouslyInView.current = true;
          }
        } else {
          setInView(isInView);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, inView };
}
