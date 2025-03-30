import { Card } from "@mantine/core";
import HorizontallyCentered from "@/components/alignment/HorizontallyCentered";
import AdminLoginHeader from "@/components/groups/admin-login/AdminLoginHeader";
import AdminLoginInput from "@/components/groups/admin-login/AdminLoginInput";

export default function AdminLogin() {
    return (
        <HorizontallyCentered>
            <Card shadow={"md"} padding="lg" radius="md" withBorder>
                <div className={`flex flex-col space-y-5`}>
                    <AdminLoginHeader />
                    <AdminLoginInput />
                </div>
            </Card>
        </HorizontallyCentered>
    );
}
