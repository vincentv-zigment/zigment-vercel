import { useRouter } from 'next/router';
import { useEffect } from 'react';

function AuthCallbackFor360() {
    const router = useRouter();

    useEffect(() => {


        // handleInstagramAuth();
    }, []);

    return (
        <div>
            Thanks...We will notify you once your account is ready.
        </div>
    );
}

export default AuthCallbackFor360;
