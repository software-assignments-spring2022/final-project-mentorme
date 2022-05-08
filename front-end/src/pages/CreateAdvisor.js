import React, { useState } from 'react'
import BurgerMenu from '../components/BurgerMenu'
import "../styles/CreateAdvisor.css"
import { Form, Button } from "react-bootstrap"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';



const CreateAdvisor = () => {

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [university, setUniversity] = useState('')
	const [school, setSchool] = useState('')
	const [department, setDepartment] = useState('')
	const [score, setScore] = useState(0.0)
	const [comment, setComment] = useState('')

	const navigate = useNavigate()

	const handleSubmit = async (e) => {
		e.preventDefault()
		const req = {
			firstName,
			lastName,
			university,
			school,
			department,
			score,
			comment
		}

		const id = await axios.post("http://147.182.129.48:4000/rateAdvisor/createAdvisor", req)
			.then((res) => {
				console.log("success.", res.data)
				navigate("/rateAdvisor/searchResult/commentsDisplay", { state: { id: res.data.id } })
			})
			.catch((err) => {
				console.log("err", err)
			})


	}

	return (
		<div className="form-page">
			<BurgerMenu />

			<h3>Create New Advisor</h3>
			<br />

			<Form className="form">
				<Form.Group className="mb-3" controlId="formBasicFirstName">
					<Form.Label>First Name:</Form.Label>
					<Form.Control type="text" placeholder="Enter First Name" onChange={(e) => setFirstName(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicLastName">
					<Form.Label>Last Name:</Form.Label>
					<Form.Control type="text" placeholder="Enter Last Name" onChange={(e) => setLastName(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicUniversity">
					<Form.Label>University:</Form.Label>
					<Form.Control type="text" placeholder="Enter University" onChange={(e) => setUniversity(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicSchool">
					<Form.Label>School:</Form.Label>
					<Form.Control type="text" placeholder="Enter School" onChange={(e) => setSchool(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicDepartment">
					<Form.Label>Department:</Form.Label>
					<Form.Control type="text" placeholder="Enter Department" onChange={(e) => setDepartment(e.target.value)} />
				</Form.Group>

				<Form.Group>
					<div>
					<Typography component="legend" >Overall Rating</Typography>
					{/* <Form.Range onChange={(e) => setScore(e.target.value / 20)} /> */}
					<Rating name="overall" defaultValue={2.5} precision={0.25} onChange={(e) => setScore(e.target.value)} size = 'large'/>
				</div>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicComment">
					<Form.Label>Comment:</Form.Label>
					<Form.Control as="textarea" rows={3} placeholder="Enter Your Comment" onChange={(e) => setComment(e.target.value)} />
				</Form.Group>

				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Submit
				</Button>
			</Form>

		</div>
	)

}

export default CreateAdvisor;