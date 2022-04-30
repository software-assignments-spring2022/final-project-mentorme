import React, { useState } from 'react'
import BurgerMenu from '../components/BurgerMenu'
import "../styles/CreateAdvisor.css"
import { Col, Container, Form, Row, Button } from "react-bootstrap"

const CreateAdvisor = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
	const [university, setUniversity] = useState('')
	const [school, setSchool] = useState('')
	const [department, setDepartment] = useState('')
	const [field, setField] = useState('')
	const [score, setScore] = useState(0.0)
	const [comment, setComment] = useState('')

	return (
		<div className="form-page">
			<BurgerMenu />

			<Form className="form">
				<Form.Group className="mb-3" controlId="formBasicFirstName">
					<Form.Label>First Name:</Form.Label>
					<Form.Control type="text" placeholder="Enter First Name" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicLastName">
					<Form.Label>Last Name:</Form.Label>
					<Form.Control type="text" placeholder="Enter Last Name" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicUniversity">
					<Form.Label>University:</Form.Label>
					<Form.Control type="text" placeholder="Enter University" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicSchool">
					<Form.Label>School:</Form.Label>
					<Form.Control type="text" placeholder="Enter School" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicDepartment">
					<Form.Label>Department:</Form.Label>
					<Form.Control type="text" placeholder="Enter Department" />
				</Form.Group>

				<Form.Group>
					<Form.Label>Score:</Form.Label>
					<Form.Range onChange={(e) => setScore(e.target.value / 20)} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicComment">
					<Form.Label>Comment:</Form.Label>
					<Form.Control as="textarea" rows={3} placeholder="Enter Your Comment"/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>

		</div>
	)

}

export default CreateAdvisor;