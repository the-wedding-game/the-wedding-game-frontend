import HeaderLinkButton from "@/components/buttons/HeaderLinkButton";

export default function HeaderLinks() {
    return (
        <div className={`flex flex-row space-x-5`}>
            <HeaderLinkButton text={"Gallery"} link={"#"} />
            <HeaderLinkButton text={"Instructions"} link={"#"} />
            <HeaderLinkButton text={"Leaderboard"} link={"#"} />
            <HeaderLinkButton text={"Challenges"} link={"#"} />
        </div>
    );
}
