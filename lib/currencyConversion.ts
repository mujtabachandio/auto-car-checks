// lib/currencyConversion.ts

export const getConvertedPrices = async (usdPrice: number) => {
    const res = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const data = await res.json();
  
    return {
      USD: usdPrice,
      CAD: usdPrice * data.rates.CAD,
      AUD: usdPrice * data.rates.AUD,
      EUR: usdPrice * data.rates.EUR,
    };
  };
  