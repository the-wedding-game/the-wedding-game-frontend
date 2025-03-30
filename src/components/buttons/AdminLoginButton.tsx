import { Button } from "@mantine/core";
import Link from "next/link";

export default function AdminLoginButton() {
    return (
        <Link href={`/auth/admin`}>
            <Button color="blue" fullWidth radius="sm" {...dimensions}>
                <div className={`flex flex-row items-center space-x-2`}>
                    <div>Log in as admin</div>
                </div>
            </Button>
        </Link>
    );
}

const dimensions = {
    w: 150,
    h: 40,
};
