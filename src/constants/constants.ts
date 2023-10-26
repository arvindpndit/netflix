export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_API_KEY}`,
  },
};

export const MOVIE_LIST_TITLES: string[] = [
  "Popular on Netflix",
  "Now Playing",
  "New Releases",
  "Blockbuster Movies",
];
