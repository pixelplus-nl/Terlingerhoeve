const BASE_OBJECT_API_URL: any = process.env.BASE_OBJECT_API_ENDPOINT;

export async function fetchObjects(
    arrival_date = "",
    stay_length = "",
    amount_of_people = "",
    bedrooms = ""
  ) {
    const headers = { "Content-Type": "application/json" };
  
    const res = await fetch(`${BASE_OBJECT_API_URL}/load_objects.php?aankomstdatum=${arrival_date}&verblijfsduur=${stay_length}&aantalPersonen=${amount_of_people}&aantalSlaapkamers=${bedrooms}`, {
      headers,
      method: "GET",
      next: {
        revalidate: 60,
      },
    });
  
    const json = await res.json();
  
    if (json.errors) {
      console.log(json.error);
      throw new Error("failed to fetch RSV objects");
    }
  
    return json;
  }