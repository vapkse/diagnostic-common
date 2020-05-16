// @deprecated
export interface ArtistImage {
    '#text': string;
    size: string;
}

// @deprecated
export interface ArtistSimilar {
    artist?: Array<ArtistBase>;
}

// @deprecated
export interface ArtistStats {
    listeners?: number;
    playcount?: number;
}

// @deprecated
export interface ArtistBase {
    name: string;
    url: string;
    image: Array<ArtistImage>;
}

// @deprecated
export interface ArtistTags {
    tag?: Array<ArtistTag>;
}

// @deprecated
export interface ArtistTag {
    name: string;
    url: string;
}

// @deprecated
export interface ArtistLinks {
    link?: ArtistLink;
}

// @deprecated
export interface ArtistLink {
    '#text': string;
    href: string;
    rel: string;
}

// @deprecated
export interface ArtistBio {
    content?: string;
    published?: string;
    summary?: string;
    links?: ArtistLinks;
}

// @deprecated
export interface ArtistInfos extends ArtistBase {
    mbid: string;
    streamable: string;
    stats: ArtistStats;
    similar: ArtistSimilar;
    tags: ArtistTags;
    bio: ArtistBio;
    ontour: string;
}

// @deprecated
export interface NowPlaying {
    artists?: string;
    album?: string;
    artistInfos?: Array<ArtistInfos>;
}
