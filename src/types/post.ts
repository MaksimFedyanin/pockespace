export interface IPost {
    space: string;
    avatar: string;
    authors: string[];
    title: string;
    description: string;
    image?: string;
}

export interface IRSSPost {
    categories: {
        _: string;
    };
    content: string;
    creator: string;
    'dc:creator': string;
    guid: string;
    isoDate: string;
    link: string;
    'media:content': {
        '$': {
            medium: "image"
            url: string;
        },
    };
    pubDate: string;
}
