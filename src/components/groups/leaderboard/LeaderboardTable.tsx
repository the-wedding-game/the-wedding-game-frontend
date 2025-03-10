"use client";

import { Table } from "@mantine/core";
import { LeaderboardEntry } from "@/types/leaderboard-types";
import SmallText from "@/components/text/SmallText";
import HorizontallyCentered from "@/components/alignment/HorizontallyCentered";

export type Props = {
    leaderboard: LeaderboardEntry[];
};

export default function LeaderboardTable(props: Props) {
    return (
        <Table highlightOnHover>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th w={75}></Table.Th>
                    <Table.Th w={300}>Name</Table.Th>
                    <Table.Th>
                        <div className={`text-right`}>Points</div>
                    </Table.Th>
                </Table.Tr>
            </Table.Thead>

            <Table.Tbody>{generateRows(props.leaderboard)}</Table.Tbody>
        </Table>
    );
}

function generateRows(leaderBoard: LeaderboardEntry[]) {
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
        <Table.Tr key={index}>
            <Table.Td>{getRankCell(index + 1)}</Table.Td>
            <Table.Td>{user.username}</Table.Td>
            <Table.Td align={"right"}>{user.points.toLocaleString()}</Table.Td>
        </Table.Tr>
    ));
}

function getRankCell(rank: number) {
    if (rank === 1) {
        return getRankBox(1, "🥇");
    } else if (rank === 2) {
        return getRankBox(2, "🥈");
    } else if (rank === 3) {
        return getRankBox(3, "🥉");
    }

    return getRankBox(rank, "");
}

function getRankBox(rank: number, prefix: string) {
    return (
        <div className={`flex flex-row space-x-2`}>
            <div className={`w-5`}>{prefix}</div>
            <div>{rank}</div>
        </div>
    );
}
