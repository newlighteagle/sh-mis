import { useState, useEffect } from 'react';

type ViewMode = 'card' | 'list';

export function useViewMode(key: string = 'community_view_mode', defaultMode: ViewMode = 'card') {
    const [viewMode, setViewMode] = useState<ViewMode>(defaultMode);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        // Only run regarding localStorage on the client side
        const savedMode = localStorage.getItem(key) as ViewMode;
        if (savedMode && (savedMode === 'card' || savedMode === 'list')) {
            setViewMode(savedMode);
        }
        setIsInitialized(true);
    }, [key]);

    const setMode = (mode: ViewMode) => {
        setViewMode(mode);
        localStorage.setItem(key, mode);
    };

    return { viewMode, setViewMode: setMode, isInitialized };
}
