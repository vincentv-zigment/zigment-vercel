import { useEffect } from 'react';
import posthog from 'posthog-js';

const PosthogScript: React.FC = () => {
    useEffect(() => {
        // Initialize posthog
        posthog.init(`${process.env.NEXT_PUBLIC_POSTHOG_KEY}`, { api_host: 'https://app.posthog.com' });
        return () => {
            // Disable posthog
            posthog.reset();
        };
    }, []);

    return null;
};

export default PosthogScript;
