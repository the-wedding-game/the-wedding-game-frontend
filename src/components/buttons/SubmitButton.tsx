import { Button, Skeleton } from "@mantine/core";

type Props = {
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
    buttonText?: string;
};

export default function SubmitButton(props: Props) {
    const buttonText = props.buttonText || "Submit";

    return (
        <Button
            type="submit"
            mt="sm"
            disabled={props.disabled}
            loading={props.loading}
            onClick={props.onClick}
            {...dimensions}
        >
            {buttonText}
        </Button>
    );
}

export function SubmitButtonSkeleton() {
    return <Skeleton radius={"sm"} {...dimensions} />;
}

const dimensions = {
    w: 140,
    h: 40,
};
