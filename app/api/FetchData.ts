export async function fetchData(data: string) {
    const res = await fetch(
        `${process.env.RAWG_API_BASE_URL}/${data}key=${process.env.RAWG_API_KEY}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
                cache: "no-store",
            },
        }
    );
    const { count, results } = await res.json();
    return { count, results };
}
export async function fetchApi(
    endpoint: string,
    platform?: string,
    genre?: string
) {
    let url = endpoint;
    if (platform) {
        url += "platforms=" + platform + "&";
    }
    if (genre) {
        url += "genres=" + genre + "&";
    }
    const { results } = await fetchData(url);
    return results;
}
