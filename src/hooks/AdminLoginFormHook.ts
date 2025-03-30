import { useForm } from "@mantine/form";
import { useModal } from "@/components/modals/Modal";
import { validatePassword, validateUsername } from "@/utils/validators";
import { User } from "@/classes/User/User";
import { NotAuthorizedError } from "@/errors/NotAuthorizedError";
import { NotAdminError } from "@/errors/NotAdminError";
import { getErrorModal, getGenericErrorModal } from "@/constants/modal-templates";
import { useRouter } from "next/navigation";

export default function useAdminLoginForm() {
    const { openModal } = useModal();
    const router = useRouter();

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            username: "",
            password: "",
        },
        validate: {
            username: (value) => validateUsername(value),
            password: (value) => validatePassword(value),
        },
        validateInputOnChange: true,
    });

    const submit = async function () {
        try {
            const values = form.getValues();
            await User.adminLogin(values.username, values.password);
            router.push("/admin");
        } catch (error: unknown) {
            if (error instanceof NotAuthorizedError)
                return openModal(getErrorModal("Invalid username and/or password. Please try again."));

            if (error instanceof NotAdminError)
                return openModal(getErrorModal("This user is not an admin. Try again with an admin account"));

            return openModal(getGenericErrorModal(error));
        }
    };

    return {
        form: form,
        submit: submit,
    };
}
