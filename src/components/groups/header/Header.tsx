import HeaderLinks from "@/components/groups/header/HeaderLinks";
import HeaderTagline from "@/components/groups/header/HeaderTagline";

export default function Header() {
    return (
        <div className={`flex flex-row justify-center items-center bg-slate-800 p-5 border-b-2 border-b-gray-500`}>
            <div className={`flex w-[1200px] justify-between items-center`}>
                <HeaderTagline />
                <HeaderLinks />
            </div>
        </div>
    );
}
