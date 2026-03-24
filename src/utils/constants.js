export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
  "https://res.cloudinary.com/djxec7fue/image/upload/v1754046291/HungerHop-logo_mak8yf.png";

const API_BASE = import.meta.env.DEV
  ? "/api/v1"
  : "https://corsproxy.io/https://namastedev.com/api/v1";

// In dev, these are proxied by Vite; in production, they fall back to full URLs.
export const RESTAURANT_LIST_API = `${API_BASE}/listRestaurants`;
export const MENU_API = `${API_BASE}/listRestaurantMenu/`;
// Use Vite dev-server proxy to avoid browser CORS issues in local development.
export const RESTAURANT_LIST_API = "/api/v1/listRestaurants";
export const MENU_API = "/api/v1/listRestaurantMenu/";
