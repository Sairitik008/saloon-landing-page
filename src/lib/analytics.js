// Initialises GA4 using the VITE_GTAG_ID env variable.
// This is called from main.jsx before React renders.
export function initAnalytics() {
  // Use VITE_GTAG_ID (matches .env.example)
  const id = import.meta.env.VITE_GTAG_ID;
  if (!id) return;

  // Inject the gtag.js script
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  // Initialise the dataLayer and send page_view
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", id, { send_page_view: true });
}
