import { fetchData } from "@/app/lib/FetchData";
import PlatformGameFilterList from "./PlatformGameFilterList";

const PlatformGameFilter = async () => {
    const { results } = await fetchData("platforms?");
    return <PlatformGameFilterList platforms={results} />;
};
export default PlatformGameFilter;
