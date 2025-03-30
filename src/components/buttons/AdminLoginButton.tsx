import { Button } from "@mantine/core";

export default function AdminLoginButton() {
    return (
        <a href={`/auth/admin`}>
            <Button color="blue" fullWidth radius="sm" {...dimensions}>
                <div className={`flex flex-row items-center space-x-2`}>
                    <div>Log in as admin</div>
                </div>
            </Button>
        </a>
    );
}

const dimensions = {
    w: 150,
    h: 40,
};
