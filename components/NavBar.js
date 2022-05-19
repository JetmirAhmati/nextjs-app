import Link from 'next/link'
import navStyles from '../styles/NavBar.module.css'
import { useAuth } from '../context/AuthContext';

function NavBar() {
    const { currentUser } = useAuth();

    return (
        <nav className={`${navStyles.nav} d-flex justify-content-between`}>
            <ul className=''>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/loginPage'>Login</Link>
                </li>
                <li>
                    <Link href='/signUpPage'>SignUp</Link>
                </li>
                <li>
                    <Link href='/dashboard'>Dashboard</Link>
                </li>
                <li>
                    <Link href='/forgotPassword'>Forget Password</Link>
                </li>
                <li>
                    <Link href='/updateProfile'>Update Profile</Link>
                </li>
            </ul>
            {currentUser &&
                <ul>
                    <li>{currentUser.email}</li>
                </ul>
            }
        </nav>
    )
}

export default NavBar