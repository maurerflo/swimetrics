import {Metadata} from "next";
import {GlobalHero} from "@/components/global/GlobalHero";

export const metadata: Metadata = {
    title: 'SwiMetrics | Home',
    description: ''
}

const image = {
    src: 'https://www.dartfish.com/wp-content/uploads/2024/03/Figure-10-World-championships-Mellbourne-2022-AUS-scaled-1-scaled.jpg',
    alt: 'SwiMetrics | Home'
};
const headline = "Sport Data Analytics made easy.";
const description = "SwiMetrics is a comprehensive system for managing tenders, providing a wide range of features and tools to streamline the tendering process.";
const action = {
    primary: {
        title: "Get Started",
        url: '#'
    },
    secondary: {
        title: 'See Features',
        url: '#',
    }
}
export default function Home() {
    return (
        <>
            <GlobalHero image={image} headline={headline} desciption={description} action={action}/>
        </>
    )
}
