export const CDN_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const LOGO_URL =
  "https://res.cloudinary.com/djxec7fue/image/upload/v1754046291/HungerHop-logo_mak8yf.png";

const ENV_API_BASE = (import.meta.env.VITE_API_BASE_URL || "").trim();
const FALLBACK_PROD_API_BASE = "https://namastedev.com";

const API_BASE_URL =
  ENV_API_BASE || (import.meta.env.DEV ? "" : FALLBACK_PROD_API_BASE);

const withApiBase = (path) => `${API_BASE_URL}${path}`;

// In dev we can use Vite proxy via relative URLs.
// In production (Render), use absolute API base URL.
export const RESTAURANT_LIST_API = withApiBase("/api/v1/listRestaurants");
export const MENU_API = withApiBase("/api/v1/listRestaurantMenu/");
