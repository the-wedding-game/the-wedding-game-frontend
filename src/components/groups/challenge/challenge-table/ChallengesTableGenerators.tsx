import { Table } from "@mantine/core";
import HorizontallyCentered from "@/components/alignment/HorizontallyCentered";
import SmallText, { SmallTextSkeleton } from "@/components/text/SmallText";
import { Challenge } from "@/classes/Challenge/Challenge";
import ChallengeTableImage, {
    ChallengeTableImageSkeleton,
} from "@/components/groups/challenge/challenge-table/ChallengeTableImage";
import ChallengeTypeBadge, { ChallengeTypeBadgeSkeleton } from "@/components/badges/ChallengeTypeBadge";
import ChallengeStatusBadge, { ChallengeStatusBadgeSkeleton } from "@/components/badges/ChallengeStatusBadge";
import LinkButton, { LinkButtonSkeleton } from "@/components/buttons/LinkButton";
import PointsBadge, { PointsBadgeSkeleton } from "@/components/badges/PointsBadge";
import ChallengeCardDescription, {
    ChallengeCardDescriptionSkeleton,
} from "@/components/groups/challenge/challenge-card/ChallengeCardDescription";
import ViewIcon from "@/components/icons/ViewIcon";
import EditChallengeButton from "@/components/buttons/EditChallengeButton";
import DeleteChallengeButton from "@/components/buttons/DeleteChallengeButton";

export function generateRows(challenges: Challenge[]) {
    if (challenges.length === 0) {
        return (
            <Table.Tr>
                <Table.Td colSpan={3}>
                    <HorizontallyCentered>
                        <SmallText>No one has completed any challenges yet</SmallText>
                    </HorizontallyCentered>
                </Table.Td>
            </Table.Tr>
        );
    }

    return challenges.map((challenge) => (
        <Table.Tr key={challenge.id}>
            <Table.Td>
                <ChallengeTableImage challenge={challenge}></ChallengeTableImage>
            </Table.Td>
            <Table.Td w={400}>
                <SmallText color={"black"} weight={500}>
                    {challenge.name}
                </SmallText>
                <div className={`sm:hidden`}>
                    <ChallengeCardDescription description={challenge.description}></ChallengeCardDescription>
                </div>
            </Table.Td>
            <Table.Td align={"center"} className={`sm:hidden`}>
                <PointsBadge points={challenge.points} />
            </Table.Td>
            <Table.Td align={"center"} className={`sm:hidden`}>
                <ChallengeTypeBadge type={challenge.type} />
            </Table.Td>
            <Table.Td>
                <ChallengeStatusBadge challenge={challenge} />
            </Table.Td>
            <Table.Td>
                <LinkButton color={"blue"} icon={<ViewIcon />} link={`/challenge/${challenge.id}`}>
                    View
                </LinkButton>
            </Table.Td>
            <Table.Td className={`sm:hidden`}>
                <EditChallengeButton challenge={challenge} />
            </Table.Td>
            <Table.Td className={`sm:hidden`}>
                <DeleteChallengeButton />
            </Table.Td>
        </Table.Tr>
    ));
}

export function generateSkeletonRows() {
    return Array.from({ length: 10 }).map((_, index) => (
        <Table.Tr key={index}>
            <Table.Td>
                <ChallengeTableImageSkeleton></ChallengeTableImageSkeleton>
            </Table.Td>
            <Table.Td w={400}>
                <SmallTextSkeleton w={"75%"} />
                <div className={`sm:hidden`}>
                    <ChallengeCardDescriptionSkeleton />
                </div>
            </Table.Td>
            <Table.Td align={"center"} className={`sm:hidden`}>
                <PointsBadgeSkeleton />
            </Table.Td>
            <Table.Td className={`sm:hidden`}>
                <ChallengeTypeBadgeSkeleton />
            </Table.Td>
            <Table.Td>
                <ChallengeStatusBadgeSkeleton />
            </Table.Td>
            <Table.Td className={`sm:hidden`}>
                <LinkButtonSkeleton />
            </Table.Td>
            <Table.Td className={`sm:hidden`}>
                <LinkButtonSkeleton />
            </Table.Td>
            <Table.Td>
                <LinkButtonSkeleton />
            </Table.Td>
        </Table.Tr>
    ));
}
