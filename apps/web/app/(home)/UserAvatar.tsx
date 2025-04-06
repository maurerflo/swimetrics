import {auth} from "@/lib/auth/auth";

export default async function UserAvatar() {
    const session = await auth()

    if (!session?.user) return null

    return (
        <div>
            {JSON.stringify(session.user)}
        </div>
    )
}
