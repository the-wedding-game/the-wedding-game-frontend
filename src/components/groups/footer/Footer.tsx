import FooterLink from "@/components/groups/footer/FooterLink";
import FooterTagline from "@/components/groups/footer/FooterTagline";

export default function Footer() {
    return (
        <div
            className={`flex flex-row justify-center items-center bg-slate-200 p-5 border-t-2 border-t-gray-500
                         mt-20 pt-10 pb-5`}
        >
            <div className={`flex w-[1200px] justify-between items-center`}>
                <FooterTagline />
                <FooterLink />
            </div>
        </div>
    );
}
