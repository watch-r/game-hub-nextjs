export type Game = {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
};
export type Platform = {
    id: string;
    name: string;
    slug: string;
};
export type Genre = {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
};

export type ratings = {
    id: number;
    title: string;
    count: number;
    percent: number;
};

export type GameById = {
    name: string;
    description: string; // | undefined
    background_image: string;
    released: string;
    background_image_additional: string;
    metacritic: number;
    rating: number;
    ratings: ratings[];
    platforms: Platformo[];
    playtime: string;
};
export type Platformo = {
    platform: { id: string; name: string; slug: string };
    released_at?: string;
    requirements?: string;
};
