export default async function HomeLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/*<GlobalNavbar/>*/}
            <main>
                {children}
            </main>
            {/*<GlobalFooter/>*/}
        </>
    );
}
