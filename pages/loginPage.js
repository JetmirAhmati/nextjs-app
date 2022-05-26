import Link from 'next/link'
import { useRef, useState } from 'react'
import { Alert, Card, Form, Button, Container } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState();
    const { logIn, currentUser } = useAuth();
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(emailRef.current.value, passwordRef.current.value);

        try {
            await logIn(emailRef.current.value, passwordRef.current.value)
            router.push('/dashboard');

        } catch (error) {
            console.log(error)
            setError('Failed To Login')
        }
    }


    return (
        <>
            <Container>
                <Card style={{ maxWidth: '400px', margin: '0 auto' }}>
                    <Card.Body >
                        <h2 className="text-center mb-4">Login into Site</h2>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form onSubmit={handleLogin}>
                            <Form.Group id="email" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} autoComplete="on" required></Form.Control>
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" ref={passwordRef} autoComplete="on" required></Form.Control>
                            </Form.Group>
                            <br />
                            <Button type="submit" className='w-100'>Login </Button>
                        </Form>
                        <div className='w-100 text-center mt-3'>
                            <Link href="/forgot-pasword">Forgot Password</Link>
                        </div>
                    </Card.Body>
                </Card>

                {currentUser ?
                    <p className="w-100 text-center mt-2"> current user: {currentUser?.email}</p>
                    :
                    <div className="w-100 text-center mt-2">Need an account?<Link href="/signUpPage">Sign Up</Link></div>
                }
            </Container>
        </>
    )
}

export default LoginPage