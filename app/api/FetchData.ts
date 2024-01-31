export async function fetchData(data: string) {
    const res = await fetch(
        `${process.env.RAWG_API_BASE_URL}/${data}key=${process.env.RAWG_API_KEY}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
                cache: "force-cache",
            },
        }
    );
    const { count, results } = await res.json();
    return { count, results };
}

export async function fetchApi(
    endpoint: string,
    page: string,
    pagesize: string,
    platform?: string,
    genre?: string,
    order?: string
) {
    let url = endpoint;
    if (platform) {
        url += "platforms=" + platform + "&";
    }
    if (genre) {
        url += "genres=" + genre + "&";
    }
    if (order) {
        url += "ordering=" + order + "&";
    }
    const { count, results } = await fetchGameswithPages(url, page, pagesize);
    return { count, results };
}
//
// just games
export async function fetchItems(data: string) {
    const res = await fetch(
        `${process.env.RAWG_API_BASE_URL}/${data}key=${process.env.RAWG_API_KEY}&page_size=9&page=2`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
                cache: "force-cache",
            },
        }
    );
    const { count, results } = await res.json();
    return { count, results };
}
export async function fetchGameswithPages(
    data: string,
    page: string,
    pagesize: string
) {
    const res = await fetch(
        `${process.env.RAWG_API_BASE_URL}/${data}key=${process.env.RAWG_API_KEY}&page_size=${pagesize}&page=${page}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
            },
        }
    );
    const { count, results } = await res.json();
    return { count, results };
}
