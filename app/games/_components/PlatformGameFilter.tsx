import { fetchData } from "@/app/api/FetchData";
import PlatformGameFilterList from "./PlatformGameFilterList";

const PlatformGameFilter = async () => {
    const {results} = await fetchData("platforms?");
    return (
        <PlatformGameFilterList platforms={results}/>
    );
};
export default PlatformGameFilter;
