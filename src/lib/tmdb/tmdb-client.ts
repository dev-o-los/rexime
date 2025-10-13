export const tmdbFetch = async (
  path: string,
  params: Record<string, string> = {}
) => {
  const url = `${process.env.MOVIE_BASE_URL}${path}?api_key=${process.env.MOVIE_API_KEY}`;

  const res = await fetch(url, {
    method: "GET",
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(`TMDB FETCH FAILED ${res.statusText}`);
  }

  const results = await res.json();
  return results;
};
