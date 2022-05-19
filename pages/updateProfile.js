import { useRef, useState } from 'react'
import { Form, Card, Button, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';

const updateProfile = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const { currentUser, updateNewEmail, updateNewPassword } = useAuth()
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        const promises = [];
        setLoading(false)

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            setError("Passwords do not match")
            return
        }

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateNewEmail(emailRef.current.value))
        }

        if (passwordRef.current.value !== currentUser.passwordRef) {
            promises.push(updateNewPassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            console.log('updated profile successful ')
            router.push("/dashboard")
        }).catch((error) => {
            console.log(error);
            setError("failed to update profile")
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <>
            <Container className="d-flex align-items-center justify-content-center">
                <div className='w-100' style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Update Profile</h2>
                            {error && <Alert variant='danger'>{error}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email" className='mb-4'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required defaultValue={currentUser?.email}></Form.Control>
                                </Form.Group>
                                <Form.Group id="password" className='mb-4'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} placeholder="Leave blank to keep the same"></Form.Control>
                                </Form.Group>
                                <Form.Group id="password-confirm" className='mb-4'>
                                    <Form.Label>Password Confirm</Form.Label>
                                    <Form.Control type="password" ref={passwordConfirmRef} placeholder="Leave blank to keep the same"></Form.Control>
                                </Form.Group>
                                <br />
                                <Button type="submit" className='w-100' disabled={loading}>Update Account</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    {/* <div className='w-100 text-center mt-2'>
                        Already have an accound? <Link href="/loginPage">Login</Link>
                    </div> */}
                </div>
            </Container>
        </>
    )
}

export default updateProfile