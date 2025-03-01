import FooterLinkButton from "@/components/buttons/FooterLinkButton";

export default function FooterLinks() {
    return (
        <div className={`flex flex-row space-x-5`}>
            <FooterLinkButton text={"GitHub"} link={"#"} />
            <FooterLinkButton text={"Create your own"} link={"#"} />
        </div>
    );
}
