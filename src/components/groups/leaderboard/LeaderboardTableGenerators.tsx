import { LeaderboardEntry } from "@/types/leaderboard-types";
import { Table } from "@mantine/core";
import HorizontallyCentered from "@/components/alignment/HorizontallyCentered";
import SmallText, { SmallTextSkeleton } from "@/components/text/SmallText";

export function generateRows(leaderBoard: LeaderboardEntry[]) {
    if (leaderBoard.length === 0) {
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

    return leaderBoard.map((user, index) => (
        <Table.Tr key={user.username}>
            <Table.Td>{getRankCell(index + 1)}</Table.Td>
            <Table.Td>{user.username}</Table.Td>
            <Table.Td align={"right"}>{user.points.toLocaleString()}</Table.Td>
        </Table.Tr>
    ));
}

function getRankCell(rank: number) {
    if (rank === 1) {
        return getRankBox("🥇");
    } else if (rank === 2) {
        return getRankBox("🥈");
    } else if (rank === 3) {
        return getRankBox("🥉");
    }

    return getRankBox(rank.toString());
}

function getRankBox(rank: string) {
    return (
        <div className={`flex flex-row space-x-2`}>
            <div className={`w-5 text-center`}>{rank}</div>
        </div>
    );
}

export function generateSkeletonRows() {
    return Array.from({ length: 10 }).map((_, index) => (
        <Table.Tr key={index}>
            <Table.Td>
                <SmallTextSkeleton w={"100%"} />
            </Table.Td>
            <Table.Td>
                <SmallTextSkeleton w={"50%"} />
            </Table.Td>
            <Table.Td align={"right"}>
                <SmallTextSkeleton w={"30%"} />
            </Table.Td>
        </Table.Tr>
    ));
}
