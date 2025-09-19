export type Game = {
    rating_top: string;
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    platforms: {
        platform: {
            id: number;
            name: string;
            slug: string;
            image: string | null;
            year_end: number | null;
            year_start: number | null;
            games_count: number;
            image_background: string;
        };
        released_at: string | null;
        requirements: {
            minimum?: string;
            recommended?: string;
            [key: string]: unknown;
        };
    }[];
    released: string;
    rating: number;
    ratings: { ratings: Ratings }[];
    ratings_count: number;
    metacritic: number;
    playtime: number;
    updated: string;
    saturated_color: string;
    dominant_colors: string;
    description: string;
    genres: Genre[];
    developers: Developer[];
    tags:Tag [];
};
export type Gamep = {
    id: number;
    name: string;
    background_image: string;
    released: string;
    rating: number;
};
export type Developer = {
    id: number;
    name: string;
    slug: string;
    games_count: number;
    image_background: string;
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

export type Ratings = {
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
    description_raw: string;
    rating: number;
    ratings: Ratings[];
    parent_platforms: { platform: Platform }[];
    playtime: string;
};
export type Platforms = {
    platform: { id: string; name: string; slug: string };
    released_at?: string;
    requirements?: string;
};

export type ScreenShots = {
    count: number;
    results: { id: number; image: string }[];
};
export type ScreenShot = {
    id: number;
    image: string;
};
export type GameStore = {
    count: number;
    results: Store[];
};
export type Store = {
    id: number;
    game_id: number;
    store_id: number;
    url: string;
};

export type Movies = {
    count: number;
    results: Videos[];
};
export type Videos = {
    id: string;
    name: string;
    data: {
        "480": string;
        max: string;
    };
};
export type Tag = {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
};
