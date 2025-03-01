import { Button, ButtonProps, PolymorphicComponentProps } from "@mantine/core";

type Props = PolymorphicComponentProps<"button", ButtonProps>;

export default function SubmitButton(props: Props) {
    return (
        <Button type="submit" mt="sm" {...props}>
            Submit
        </Button>
    );
}
