import { Button } from "@mantine/core";

type Props = {
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
    buttonText?: string;
};

export default function SubmitButton(props: Props) {
    const buttonText = props.buttonText || "Submit";

    return (
        <Button type="submit" mt="sm" disabled={props.disabled} loading={props.loading} onClick={props.onClick}>
            {buttonText}
        </Button>
    );
}
