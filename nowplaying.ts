export interface ArtistImage {
    '#text': string;
    size: string;
}

export interface ArtistSimilar {
    artist?: Array<ArtistBase>;
}

export interface ArtistStats {
    listeners?: number;
    playcount?: number;
}

export interface ArtistBase {
    name: string;
    url: string;
    image: Array<ArtistImage>;
}

export interface ArtistTags {
    tag?: Array<ArtistTag>;
}

export interface ArtistTag {
    name: string;
    url: string;
}

export interface ArtistLinks {
    link?: ArtistLink;
}

export interface ArtistLink {
    '#text': string;
    href: string;
    rel: string;
}

export interface ArtistBio {
    content?: string;
    published?: string;
    summary?: string;
    links?: ArtistLinks;
}

export interface ArtistInfos extends ArtistBase {
    mbid: string;
    streamable: string;
    stats: ArtistStats;
    similar: ArtistSimilar;
    tags: ArtistTags;
    bio: ArtistBio;
    ontour: string;
}

export interface NowPlaying {
    artists?: string;
    album?: string;
    artistInfos?: Array<ArtistInfos>;
}
