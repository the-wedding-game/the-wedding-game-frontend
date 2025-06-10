import { OpenModalParams } from "@/components/modals/Modal";

export function getSuccessModal(message: string, redirection?: () => void): OpenModalParams {
    const openModalParams: OpenModalParams = {
        title: "Yay! 😄",
        message: message,
        type: "success",
    };

    if (redirection) openModalParams.closeAction = () => redirection();
    return openModalParams;
}

export function getErrorModal(message: string, error?: unknown): OpenModalParams {
    return {
        title: "Oh no! ☹️",
        message: message,
        type: "error",
        additionalDetails: error instanceof Error ? error.stack : "",
    };
}

export function getGenericErrorModal(error: unknown): OpenModalParams {
    return getErrorModal("There was an unexpected error. Please try again.", error);
}
