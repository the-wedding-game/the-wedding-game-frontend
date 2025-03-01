import { Button } from "@mantine/core";

type Props = {
    disabled: boolean;
    loading: boolean;
    onClick: () => void;
};

export default function SubmitButton(props: Props) {
    return (
        <Button type="submit" mt="sm" disabled={props.disabled} loading={props.loading} onClick={props.onClick}>
            Submit
        </Button>
    );
}
