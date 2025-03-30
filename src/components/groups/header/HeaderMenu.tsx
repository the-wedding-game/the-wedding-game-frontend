"use client";

import { Menu } from "@mantine/core";
import { IconChartBar, IconChecklist, IconHelpCircle, IconLibraryPhoto } from "@tabler/icons-react";
import HamburgerMenuIcon from "@/components/icons/HamburgerMenuIcon";
import { useUser } from "@/classes/User/UserHook";
import Link from "next/link";

type MenuItem = {
    label: string;
    icon: React.ReactNode;
    link: string;
};

const PLAYER_MENU_ITEMS: MenuItem[] = [
    { label: "Instructions", icon: <IconHelpCircle size={14} />, link: "/instructions" },
    { label: "Challenges", icon: <IconChecklist size={14} />, link: "/" },
    { label: "Gallery", icon: <IconLibraryPhoto size={14} />, link: "/gallery" },
    { label: "Leaderboard", icon: <IconChartBar size={14} />, link: "/leaderboard" },
];

const ADMIN_MENU_ITEMS: MenuItem[] = [
    { label: "Challenges", icon: <IconChecklist size={14} />, link: "/admin/challenges" },
];

export default function HeaderMenu() {
    const { user, loading } = useUser();

    return (
        <Menu
            shadow="md"
            width={200}
            trigger="click"
            transitionProps={{ transition: "scale-y", duration: 100, timingFunction: "ease" }}
        >
            <Menu.Target>
                <div className={`w-5 text-white cursor-pointer hover:text-gray-300`}>
                    <HamburgerMenuIcon />
                </div>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>The Wedding Game</Menu.Label>
                {PLAYER_MENU_ITEMS.map((item) => (
                    <Menu.Item key={item.label} leftSection={item.icon} component={Link} href={item.link}>
                        {item.label}
                    </Menu.Item>
                ))}

                {!loading && user?.isAdmin() && (
                    <>
                        <Menu.Divider />
                        <Menu.Label>Administrator</Menu.Label>

                        {ADMIN_MENU_ITEMS.map((item) => (
                            <Menu.Item key={item.label} leftSection={item.icon} component={Link} href={item.link}>
                                {item.label}
                            </Menu.Item>
                        ))}
                    </>
                )}
            </Menu.Dropdown>
        </Menu>
    );
}
