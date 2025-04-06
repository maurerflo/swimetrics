import {Alert, AlertDescription, AlertTitle} from "@repo/ui/components/alert";
import {Metadata} from "next";
import {Button} from "@repo/ui/components/button";
import SignIn from "@/app/(home)/signin";
import UserAvatar from "@/app/(home)/UserAvatar";

export const metadata: Metadata = {
    title: 'SwiMetrics | Home',
    description: ''
}

export default function Home() {
    return (
        <>
            <div className="text-xl font-bold">TEST Hello World</div>
            <Alert>
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                    You can add components and dependencies to your app using the cli.
                </AlertDescription>
            </Alert>
            <Button>TEST Button</Button>
            <SignIn/>
            <UserAvatar/>
        </>
    )
}
