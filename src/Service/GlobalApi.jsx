import axios from "axios";

const BASE_URL = "https://places.googleapis.com/v1/places:searchText";

const getHeaders = (fieldMask) => ({
  headers: {
    "Content-Type": "application/json",
    "X-Goog-Api-Key": import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    "X-Goog-FieldMask": fieldMask.join(","), // Field masks must be comma-separated
  },
});

export const PHOTO_URL = (photoReference) =>
  `https://places.googleapis.com/v1/${photoReference}/media?maxHeightPx=1000&key=${import.meta.env.VITE_GOOGLE_MAP_API_KEY}`;

export const getPlaceDetails = (data) => {
  const fieldMask = [
    "id",
    "name",
    "displayName",
    "formattedAddress",
    "photos",
    "googleMapsUri",
    "location",
    "priceLevel",
    "rating",
  ];
  return axios.post(BASE_URL, data, getHeaders(fieldMask));
};

export const getCityDetails = (data) => {
  const fieldMask = [
    "name",
    "displayName",
    "photos",
    "googleMapsUri",
    "location",
  ];
  return axios.post(BASE_URL, data, getHeaders(fieldMask));
};