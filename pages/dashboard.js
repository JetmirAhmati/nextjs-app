import { useAuth } from '../context/AuthContext';
import { Card, Button, Alert } from 'react-bootstrap';
import { useState } from 'react'
import Link from 'next/link'

function Dashboard() {
    const { currentUser, logOut } = useAuth()
    const [error, setError] = useState();

    const handleLogOut = async (e) => {
        e.preventDefault();

        try {
            await logOut()

        } catch (error) {
            console.log(error)
            setError("Failed to LogOut")
        }
    }

    return (
        <>
            <div className='text-center mb-4'>
                <h2>welcome into dashboard page</h2>
            </div>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-4'> Profile </h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <strong>Email: </strong> {currentUser?.email}
                    <Link href="/updateProfile">
                        <a className='btn btn-primary w-100 mt-4'>Update Profile </a>
                    </Link>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                <Button variant='link' type="submit" style={{ marginTop: "20px" }} onClick={handleLogOut}>LogOut</Button>
            </div>
        </>

    )
}


export default Dashboard