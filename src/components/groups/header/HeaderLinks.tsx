"use client";

import HeaderLinkButton from "@/components/buttons/HeaderLinkButton";
import { useUser } from "@/classes/User/UserHook";

export default function HeaderLinks() {
    const { user } = useUser();

    return (
        <div className={`flex flex-row space-x-5`}>
            <HeaderLinkButton text={"Gallery"} link={"/gallery"} />
            <HeaderLinkButton text={"Instructions"} link={"#"} />
            <HeaderLinkButton text={"Leaderboard"} link={"/leaderboard"} />
            <HeaderLinkButton text={"Challenges"} link={"/"} />
            {user && user.isAdmin() && <HeaderLinkButton text={"Admin"} link={"/admin"} />}
        </div>
    );
}
