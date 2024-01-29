export async function fetchData (item:string){
    const res = await fetch(
        `${process.env.RAWG_API_BASE_URL}/${item}?key=${process.env.RAWG_API_KEY}`,
        {
            method: "GET",
            headers: {
                accept: "application/json",
                cache: 'no-store'
            },
        }
    );
    const { results } = await res.json();
    return results
}