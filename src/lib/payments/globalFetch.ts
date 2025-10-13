export const globalFetch = (relativeURL: string, init?: RequestInit) => {
  return fetch(`${process.env.SITE_URL}${relativeURL}`, init);
};
