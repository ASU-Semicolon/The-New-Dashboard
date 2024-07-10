import { useEffect } from "react";
export default function useCandidateCount(setCount, candidates) {
    useEffect(() => {
        setCount(candidates.length);
    }, [candidates]);
}
