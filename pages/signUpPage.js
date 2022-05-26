import { useRef, useState } from 'react'
import { Form, Card, Button, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import Link from 'next/link'
import { useRouter } from 'next/router';


const SignUpPage = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const { signup } = useAuth()
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError("Passwords do not match")
            return
        }

        try {
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value);
            router.push('/dashboard');

        } catch (error) {
            console.log(error)
            setError('Failed to Create account');
        }

        setLoading(false)
    }

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center">
                <div className='w-100' style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign Up</h2>
                            {error && <Alert variant='danger'>{error}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email" >
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required></Form.Control>
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required></Form.Control>
                                </Form.Group>
                                <Form.Group id="password-confirm">
                                    <Form.Label>Password Confirm</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} required></Form.Control>
                                </Form.Group>
                                <br />
                                <Button type="submit" className='w-100' disabled={loading}>Register</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    <div className='w-100 text-center mt-2'>
                        Already have an accound? <Link href="/loginPage">Login</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SignUpPage