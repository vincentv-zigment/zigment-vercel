import Spinner from '@/components/common/loaders/spinner';
import { useToast } from '@/hooks/useToast';
import axiosWithoutAuth from '@/lib/axiosAPIwithoutAuth';
import { useEffect, useState } from 'react';

function AuthCallbackForFBMessenger() {
    const toast = useToast();
    const [message, setMessage] = useState('Authenticating with FB Messenger...');
    const [timeLeft, setTimeLeft] = useState(5);

    async function handleFBMessengerAuth() {
        const fragment = window.location.hash.substring(1);
        const params = new URLSearchParams(fragment);
        const accessToken = params.get("access_token");
        const state = params.get("state");

        if (!accessToken) {
            setMessage("Access token was not returned by FB Messenger.");
            startClosingTimer();
            return;
        }
        if (!state) {
            setMessage("State was not returned by Instagram.");
            startClosingTimer();
            return;
        }

        try {
            await axiosWithoutAuth.post('/communication-channels/setup-fb-messenger', {
                access_token: accessToken,
                state: state
            });
            toast.addToast("success", "Connected Successfully");
            window.close();
        } catch {
            setMessage("Something went wrong...");
            toast.addToast("error", "Something went wrong...");
            startClosingTimer();
        }
    }

    function startClosingTimer() {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    window.close();
                }
                return prevTime - 1;
            });
        }, 1000);
    }

    useEffect(() => {
        handleFBMessengerAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-8 bg-white rounded-lg shadow-md text-center">
                <Spinner color="black" />
                <p className="text-xl font-semibold mb-2 mt-2">{message}</p>
                {timeLeft < 5 && (
                    <p className="text-sm text-gray-500">
                        Closing in {timeLeft >= 1 ? timeLeft : `0`} second{timeLeft !== 1 ? 's' : ''}...
                    </p>
                )}
            </div>
        </div>
    );
}

export default AuthCallbackForFBMessenger;