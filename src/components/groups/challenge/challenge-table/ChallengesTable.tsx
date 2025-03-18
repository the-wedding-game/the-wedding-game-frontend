"use client";

import { Table } from "@mantine/core";
import { Challenge } from "@/classes/Challenge/Challenge";
import {
    generateRows,
    generateSkeletonRows,
} from "@/components/groups/challenge/challenge-table/ChallengesTableGenerators";

export type Props = {
    challenges: Challenge[];
};

export default function ChallengesTable(props: Props) {
    return (
        <Table highlightOnHover stickyHeader={true}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th></Table.Th>
                    <Table.Th className={`sm:hidden`}>
                        <div className={`text-center`}>Points</div>
                    </Table.Th>
                    <Table.Th className={`sm:hidden`}>
                        <div className={`text-center`}>Type</div>
                    </Table.Th>
                    <Table.Th>
                        <div className={`text-center`}>Status</div>
                    </Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Thead>

            <Table.Tbody>{generateRows(props.challenges)}</Table.Tbody>
        </Table>
    );
}

export function ChallengesTableSkeleton() {
    return (
        <Table highlightOnHover>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th></Table.Th>
                    <Table.Th className={`sm:hidden`}>
                        <div className={`text-center`}>Points</div>
                    </Table.Th>
                    <Table.Th className={`sm:hidden`}>
                        <div className={`text-center`}>Type</div>
                    </Table.Th>
                    <Table.Th>
                        <div className={`text-center`}>Status</div>
                    </Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Thead>

            <Table.Tbody>{generateSkeletonRows()}</Table.Tbody>
        </Table>
    );
}
