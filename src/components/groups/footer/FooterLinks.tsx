import FooterLinkButton from "@/components/buttons/FooterLinkButton";
import GitHubIcon from "@/components/icons/GitHubIcon";

export default function FooterLinks() {
    return (
        <div className={`flex flex-row space-x-5`}>
            <FooterLinkButton text={"GitHub"} link={"https://github.com/the-wedding-game"} icon={<GitHubIcon />} />
            <FooterLinkButton text={"Create your own"} link={"#"} />
        </div>
    );
}
