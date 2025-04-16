import {GlobalFooter} from "@/components/global/GlobalFooter";
import {auth, bottomLinks, copyright, headerMenuItems, logo, menuItems, tagline} from "@/components/global/config";
import {GlobalHeader} from "@/components/global/GlobalHeader";

export default async function HomeLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <GlobalHeader logo={logo} auth={auth} menu={headerMenuItems}/>
            <main className="container mx-auto p-8">
                {children}
            </main>
            <GlobalFooter logo={logo}
                          bottomLinks={bottomLinks}
                          copyright={copyright}
                          menuItems={menuItems}
                          tagline={tagline}/>
        </>
    );
}
