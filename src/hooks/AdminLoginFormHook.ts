import { useForm } from "@mantine/form";
import { useModal } from "@/components/modals/Modal";
import { validatePassword, validateUsername } from "@/utils/validators";
import { User } from "@/classes/User/User";
import { NotAuthorizedError } from "@/errors/NotAuthorizedError";
import { NotAdminError } from "@/errors/NotAdminError";
import { getGenericErrorModal, INVALID_CREDENTIALS_MODAL, NOT_ADMIN_MODAL } from "@/constants/modal-templates";

export default function useAdminLoginForm() {
    const { openModal } = useModal();

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
            window.location.href = "/admin";
        } catch (error: unknown) {
            if (error instanceof NotAuthorizedError) return openModal(INVALID_CREDENTIALS_MODAL);
            if (error instanceof NotAdminError) return openModal(NOT_ADMIN_MODAL);
            return openModal(getGenericErrorModal(error));
        }
    };

    return {
        form: form,
        submit: submit,
    };
}
