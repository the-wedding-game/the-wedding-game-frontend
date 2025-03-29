import { useEffect, useState } from "react";
import { useModal } from "@/components/modals/Modal";
import { getGenericErrorModal } from "@/constants/modal-templates";
import { LeaderboardRequest } from "@/api/points/leaderboard/LeaderboardRequest";
import { LeaderboardEntry } from "@/types/leaderboard-types";

export default function useLeaderboard() {
    const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[] | null>(null);
    const [loading, setLoading] = useState(true);
    const { openModal } = useModal();

    async function fetchLeaderboard() {
        setLoading(true);
        try {
            const request = new LeaderboardRequest();
            const response = await request.send();
            setLeaderboard(response.getLeaderboard());
        } catch (error) {
            openModal(getGenericErrorModal(error));
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchLeaderboard();
    });

    return {
        leaderboard,
        loading,
    };
}
