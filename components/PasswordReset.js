import { Alert, Card, Form, Button, Container } from 'react-bootstrap'
import Link from 'next/link'
import { useState, useRef } from 'react'
import { useAuth } from '../context/AuthContext'
import parse from 'html-react-parser';


const PasswordReset = () => {

    const emailRef = useRef()
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");
    const { resetPassword } = useAuth()

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            setMessage("")
            await resetPassword(emailRef.current.value)
            setMessage(`Check your inbox  <strong><i>${emailRef.current.value}</i></strong> for further instructions.`)
            clearInputValues()
        }
        catch (error) {
            console.log(error)
            setError("Password Reset Failed")
        }
    }

    const clearInputValues = () => {
        emailRef.current.value = "";
    }

    return (
        <Card style={{ maxWidth: '400px', margin: '0 auto' }}>
            <Card.Body >
                <h2 className="text-center mb-4">Password Reset</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                {message && <Alert variant='success'>{parse(message)}</Alert>}

                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" ref={emailRef} autoComplete="on" required></Form.Control>
                    </Form.Group>
                    <Button type="submit" className='w-100 mt-4'>Reset Password </Button>
                </Form>
                <div className='w-100 text-center mt-3'>
                    <Link href="/loginPage">Login</Link>
                </div>
            </Card.Body>
        </Card>
    )
}

export default PasswordReset