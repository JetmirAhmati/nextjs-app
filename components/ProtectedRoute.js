import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react'

const ProtectedRoute = ({ children }) => {
    const { isUserLoggedIn } = useAuth();
    const router = useRouter();

    useEffect(() => {
        const subscribe = () => {
            if (!isUserLoggedIn && router.pathname === '/dashboard') {
                router.push('/loginPage');
            }
        }

       return subscribe()

    }, [router, isUserLoggedIn]);

    return (
        <>
            {children}
        </>
    )
}

export default ProtectedRoute
