import {Book, Sunset, Trees, Zap} from "lucide-react";
import {GlobalHeaderMenuItem} from "@/components/global/model";

export const logo = {
    src: "https://www.shadcnblocks.com/images/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "SwiMetrics",
    url: "http://localhost:3000/",
};
export const tagline = "Sport Data Analytics made easy.";
export const menuItems = [
    {
        title: "Product",
        links: [
            {text: "Overview", url: "#"},
            {text: "Pricing", url: "#"},
            {text: "Marketplace", url: "#"},
            {text: "Features", url: "#"},
            {text: "Integrations", url: "#"},
            {text: "Pricing", url: "#"},
        ],
    },
    {
        title: "Company",
        links: [
            {text: "About", url: "#"},
            {text: "Team", url: "#"},
            {text: "Blog", url: "#"},
            {text: "Careers", url: "#"},
            {text: "Contact", url: "#"},
            {text: "Privacy", url: "#"},
        ],
    },
    {
        title: "Resources",
        links: [
            {text: "Help", url: "#"},
            {text: "Sales", url: "#"},
            {text: "Advertise", url: "#"},
        ],
    },
    {
        title: "Social",
        links: [
            {text: "Twitter", url: "#"},
            {text: "Instagram", url: "#"},
            {text: "LinkedIn", url: "#"},
        ],
    },
];
export const copyright = "© 2025 swimetrics.com. All rights reserved.";
export const bottomLinks = [
    {text: "Imprint", url: "#"},
    {text: "Terms and Conditions", url: "#"},
    {text: "Privacy Policy", url: "#"}
];
export const headerMenuItems: GlobalHeaderMenuItem[] = [
    {title: "Home", url: "#"},
    {
        title: "Products",
        url: "#",
        items: [
            {
                title: "Blog",
                description: "The latest industry news, updates, and info",
                icon: <Book className="size-5 shrink-0"/>,
                url: "#",
            },
            {
                title: "Company",
                description: "Our mission is to innovate and empower the world",
                icon: <Trees className="size-5 shrink-0"/>,
                url: "#",
            },
            {
                title: "Careers",
                description: "Browse job listing and discover our workspace",
                icon: <Sunset className="size-5 shrink-0"/>,
                url: "#",
            },
            {
                title: "Support",
                description:
                    "Get in touch with our support team or visit our community forums",
                icon: <Zap className="size-5 shrink-0"/>,
                url: "#",
            },
        ],
    },
    {
        title: "Resources",
        url: "#",
        items: [
            {
                title: "Help Center",
                description: "Get all the answers you need right here",
                icon: <Zap className="size-5 shrink-0"/>,
                url: "#",
            },
            {
                title: "Contact Us",
                description: "We are here to help you with any questions you have",
                icon: <Sunset className="size-5 shrink-0"/>,
                url: "#",
            },
            {
                title: "Status",
                description: "Check the current status of our services and APIs",
                icon: <Trees className="size-5 shrink-0"/>,
                url: "#",
            },
            {
                title: "Terms of Service",
                description: "Our terms and conditions for using our services",
                icon: <Book className="size-5 shrink-0"/>,
                url: "#",
            },
        ],
    },
    {
        title: "Pricing",
        url: "#",
    },
    {
        title: "Blog",
        url: "#",
    },
]
export const auth = {
    login: {title: "Login", url: "/auth/signin"},
    signup: {title: "Sign up", url: "/auth/signup"},
}
