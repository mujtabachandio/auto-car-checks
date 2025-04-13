// lib/geolocation.ts

export const getUserCountry = async () => {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();
    return data.country; // "US", "CA", "AU", etc.
  };
  