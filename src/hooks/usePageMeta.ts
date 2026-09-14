import { useEffect } from "react";

export function usePageMeta(title: string, description?: string): void {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    let descTag: HTMLMetaElement | null = null;
    let previousDescription: string | null = null;

    if (description) {
      descTag = document.querySelector('meta[name="description"]');
      if (descTag) {
        previousDescription = descTag.getAttribute("content");
        descTag.setAttribute("content", description);
      }
    }

    return () => {
      document.title = previousTitle;
      if (descTag && previousDescription !== null) {
        descTag.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
}
