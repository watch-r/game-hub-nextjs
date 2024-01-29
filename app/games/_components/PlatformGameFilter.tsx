import { fetchData } from "@/app/api/FetchData";
import PlatformGameFilterList from "./PlatformGameFilterList";

const PlatformGameFilter = async () => {
    const platforms = await fetchData("platforms");
    return (
        <PlatformGameFilterList platforms={platforms}/>
    );
};
export default PlatformGameFilter;
