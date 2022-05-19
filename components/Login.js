
import Link from 'next/link'
import { useRef, useState } from 'react'
import { Alert, Card, Form, Button, Container } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState();
    const { logIn, currentUser } = useAuth();


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            logIn(emailRef.current.value, passwordRef.current.value)
            console.log('login success')
        } catch (error) {
            console.log(error)
            setError('Failed')
        }
    }

    console.log('current user logged :', currentUser)

    return (
        <>
            <Card style={{ maxWidth: '400px', margin: '0 auto' }}>
                <Card.Body >
                    <h2 className="text-center mb-4">Login into Site</h2>
                    {error && <Alert variant='danger'>{error}</Alert>}
                    <Form onSubmit={handleLogin}>
                        <Form.Group id="email" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <br />
                        <Button type="submit" className='w-100'>Login </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Need an account? <Link href="/signUpPage">Sign Up</Link>
            </div>

        </>
    )
}

export default Login