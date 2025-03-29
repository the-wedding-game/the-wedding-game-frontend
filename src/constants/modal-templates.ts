import { OpenModalParams } from "@/components/modals/Modal";

export function getSuccessModal(message: string, redirectUrl?: string) {
    const openModalParams: OpenModalParams = {
        title: "Yay! 😄",
        message: message,
        type: "success",
    };

    if (redirectUrl) openModalParams.closeAction = () => (window.location.href = redirectUrl);
    return openModalParams;
}

export function getErrorModal(message: string, error?: Error | unknown): OpenModalParams {
    return {
        title: "Oh no! ☹️",
        message: message,
        type: "error",
        additionalDetails: error instanceof Error ? error.stack : "",
    };
}

export function getGenericErrorModal(error: Error | unknown): OpenModalParams {
    return getErrorModal("There was an unexpected error. Please try again.", error);
}
