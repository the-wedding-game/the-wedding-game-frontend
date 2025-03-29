import { useEffect, useState } from "react";
import { useModal } from "@/components/modals/Modal";
import { getGenericErrorModal } from "@/constants/modal-templates";
import { GalleryEntry } from "@/types/gallery-types";
import { GalleryRequest } from "@/api/gallery/GalleryRequest";

export default function useGallery() {
    const [gallery, setGallery] = useState<GalleryEntry[] | null>(null);
    const [loading, setLoading] = useState(true);
    const { openModal } = useModal();

    async function fetchGallery() {
        setLoading(true);
        try {
            const request = new GalleryRequest();
            const response = await request.send();
            setGallery(response.getGallery());
        } catch (error) {
            openModal(getGenericErrorModal(error));
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchGallery();
    }, []);

    return {
        gallery,
        loading,
    };
}
