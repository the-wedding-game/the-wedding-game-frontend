import { OpenModalParams } from "@/components/modals/Modal";

export const INVALID_CREDENTIALS_MODAL: OpenModalParams = {
    title: "Oh no! ☹️",
    message: "Invalid username and/or password. Please try again.",
    type: "error",
};

export const NOT_ADMIN_MODAL: OpenModalParams = {
    title: "Oh no! ☹️",
    message: "This user is not an admin. Try again with an admin account.",
    type: "error",
};

export function getGenericErrorModal(error: Error | unknown): OpenModalParams {
    return {
        title: "Oh no! ☹️",
        message: "There was an unexpected error. Please try again.",
        type: "error",
        additionalDetails: error instanceof Error ? error.stack : "",
    };
}
