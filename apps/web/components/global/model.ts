
export interface LogoMenueItem {
    url: string;
    src: string;
    alt: string;
    title: string;
};

export interface GlobalHeaderMenuItem {
    title: string;
    url: string;
    description?: string;
    icon?: React.ReactNode;
    items?: GlobalHeaderMenuItem[];
}

export interface GlobalFooterMenuItem {
    title: string;
    links: {
        text: string;
        url: string;
    }[];
}
