import { useEffect } from "react";

export default function useDocumentTitle(title) {
    useEffect(() => {
        if (title) {
            document.title = title;
        }
    }, []);
}
