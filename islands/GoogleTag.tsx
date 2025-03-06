import { useEffect } from "preact/hooks";

export default function GoogleTag() {
  useEffect(() => {
    globalThis.dataLayer = globalThis.dataLayer || [];

    function gtag(...args: any[]) {
      globalThis.dataLayer.push(args);
    }

    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-F7423QN12L";
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag

    gtag("js", new Date());
    gtag("config", "G-F7423QN12L");
  }, []);

  return <div style="display: none;"></div>;
}
