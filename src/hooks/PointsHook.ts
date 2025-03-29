import { useEffect, useState } from "react";
import { MyPointsRequest } from "@/api/points/me/MyPointsRequest";
import { useModal } from "@/components/modals/Modal";
import { getGenericErrorModal } from "@/constants/modal-templates";

export default function usePoints() {
    const [points, setPoints] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const { openModal } = useModal();

    async function fetchPoints() {
        setLoading(true);
        try {
            const request = new MyPointsRequest();
            const response = await request.send();
            setPoints(response.getPoints());
        } catch (error) {
            openModal(getGenericErrorModal(error));
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPoints();
    });

    return {
        points,
        loading,
    };
}
