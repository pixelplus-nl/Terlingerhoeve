const API_URL: any = process.env.WORDPRESS_API_ENDPOINT;

export async function fetchAPI(
  query = "",
  { variables }: Record<string, any> = {}
) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({
      query,
      variables,
    }),
    next: {
      revalidate: 60,
    },
  });

  const json = await res.json();

  if (json.errors) {
    console.log(json.error);
    throw new Error("failed to fetch API");
  }

  return json.data;
}
