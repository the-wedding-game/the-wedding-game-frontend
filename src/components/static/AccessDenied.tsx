import HorizontallyCentered from "@/components/alignment/HorizontallyCentered";
import { Card } from "@mantine/core";
import ErrorIcon from "@/components/icons/ErrorIcon";
import TitleText from "@/components/text/TitleText";
import AdminLoginButton from "@/components/buttons/AdminLoginButton";

export default function AccessDenied() {
    return (
        <HorizontallyCentered>
            <Card shadow={"md"} className={`flex flex-col space-y-5`}>
                <div className={`flex flex-row items-start space-x-2`}>
                    <ErrorIcon />
                    <div className={`flex flex-col items-start space-y-5`}>
                        <div className={`flex flex-col items-start space-y-2`}>
                            <TitleText>Access Denied</TitleText>
                            <div>You must be logged in as an administrator to view this page.</div>
                        </div>
                        <AdminLoginButton />
                    </div>
                </div>
            </Card>
        </HorizontallyCentered>
    );
}
