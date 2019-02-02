export interface IArtistImage {
    '#text': string;
    size: string;
}

export interface IArtistSimilar {
    artist?: IArtistBase[];
}

export interface IArtistStats {
    listeners?: number;
    playcount?: number;
}

export interface IArtistBase {
    name: string;
    url: string;
    image: IArtistImage[];
}

export interface IArtistTags {
    tag?: IArtistTag[];
}

export interface IArtistTag {
    name: string;
    url: string;
}

export interface IArtistLinks {
    link?: IArtistLink;
}

export interface IArtistLink {
    '#text': string;
    href: string;
    rel: string;
}

export interface IArtistBio {
    content?: string;
    published?: string;
    summary?: string;
    links?: IArtistLinks;
}

export interface IArtistInfos extends IArtistBase {
    mbid: string;
    streamable: string;
    stats: IArtistStats;
    similar: IArtistSimilar;
    tags: IArtistTags;
    bio: IArtistBio;
    ontour: string;
}

export interface INowPlaying {
    artists?: string;
    album?: string;
    artistInfos?: IArtistInfos[];
}
