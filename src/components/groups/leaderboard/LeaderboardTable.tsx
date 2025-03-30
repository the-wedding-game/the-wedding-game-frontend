"use client";

import { Table } from "@mantine/core";
import { LeaderboardEntry } from "@/types/leaderboard-types";
import { generateRows, generateSkeletonRows } from "@/components/groups/leaderboard/LeaderboardTableGenerators";

export type Props = {
    readonly leaderboard: LeaderboardEntry[];
};

export default function LeaderboardTable(props: Props) {
    return (
        <Table highlightOnHover>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th w={50}></Table.Th>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>
                        <div className={`text-right`}>Points</div>
                    </Table.Th>
                </Table.Tr>
            </Table.Thead>

            <Table.Tbody>{generateRows(props.leaderboard)}</Table.Tbody>
        </Table>
    );
}

export function LeaderboardTableSkeleton() {
    return (
        <Table highlightOnHover>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th w={50}></Table.Th>
                    <Table.Th>Name</Table.Th>
                    <Table.Th>
                        <div className={`text-right`}>Points</div>
                    </Table.Th>
                </Table.Tr>
            </Table.Thead>

            <Table.Tbody>{generateSkeletonRows()}</Table.Tbody>
        </Table>
    );
}
