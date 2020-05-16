export interface Artist extends Info {
    [subInfos: string]: any;
    name: string; // Nom complet
    ipi: string; // IPI
    type: 'band' | 'person'; // Est-ce un groupe ou une personne?
    sex?: 'male' | 'female'; // Sexe si c'est une personne
    main_role?: string; // Rôle
    url: string; // Url sur le site Music Story
    firstname: string; // Prénom
    lastname: string; // Nom propre
    nickname: string; // Surnom
    realname?: string; // Nom réel de l'artiste
    coeff_actu: string; // Coefficient d'actualité
    country?: string; // Pays
    start_decade?: number; // Décennie de début de carrière
    end_decade?: string; // Décennie de fin de carrière
    update_date: string; // Date de dernière mise à jour
    create_date: string; // Date d'entrée en base de données

    genres: Array<Genre>;
    biographies: Array<Biography>;
    pictures: Array<Picture>;
    news: Array<News>;
    timelines: Array<TimeLine>;
    albums: Array<Album>;
    websites: Array<WebSite>;
    musicbrainz: Array<MusicBrainz>;
}

export interface Info {
    id: number;
}

export interface MusicBrainz extends Info {
    url: string;
    update_date: string;
    creation_date: string;
}

export interface WebSite extends Info {
    url: string;
    update_date: string;
    creation_date: string;
    official: number;
}

export interface Album extends Info {
    title: string;
    url: string;
    label: string;
    distributor: string;
    type: string;
    format: string;
    release_date: string;
    update_date: string;
    creation_date: string;
    link: string;
}

export interface TimeLine extends Info {
    id_source: number;
    title: string;
    subtitle: string;
    content: string;
    linked_content: string;
    date: string;
    licence: string;
    copyright: string;
    source: string;
    update_date: string;
    creation_date: string;
    lang: string;
    url: string;
    location: string;
    country: string;
    writer: string;
    important: string;
    type_source: string;
    link: string;
}

export interface News extends Info {
    id_source: number;
    title: string;
    subtitle: string;
    content: string;
    linked_content: string;
    date: string;
    licence: string;
    copyright: string;
    source: string;
    update_date: string;
    creation_date: string;
    lang: string;
    url: string;
    location: string;
    country: string;
    writer: string;
    type_source: string;
    area: string;
    link: string;
}

export interface Picture extends Info {
    id_source: number;
    source: string;
    width: number;
    height: number;
    url: string;
    url_400: string;
    mime_type: string;
    copyright: string;
    licence: string;
    update_date: string;
    creation_date: string;
    main: number;
}

export interface Genre extends Info {
    link: string[];
    name: string;
    url: string;
    main: number;
    update_date: string;
    creation_date: string;
}

export interface Biography extends Info {
    header: string;
    linked_header: string;
    content: string;
    linked_content: string;
    author: string;
    lang: string;
    source: string;
    copyright: string;
    licence: string;
    update_date: string;
    creation_date: string;
    link: string;
}

export class MusicStory {
    public artists = new Array<Artist>();
    public album: string | Album;
    public title: string;
    public hasInfo: boolean;
    public hasBiography: boolean;
    public hasGenre: boolean;
    public hasPicture: boolean;
    public hasNews: boolean;
    public hasTimeLine: boolean;
    public hasAlbum: boolean;
    public hasWebSite: boolean;
    public hasMusicBrainz: boolean;
}
