import { useState } from "react";
import styled from "styled-components";

const Contact = () => {
	const Container = styled.div`
		height: 100vh;
		background-color: white;
		font-family: sans-serif;
	`;
	const Header = styled.h1`
		font-size: 50px;
		text-align: center;
		margin: 10px 0px;
	`;
	const Wrapper = styled.div`
		display: flex;
		align-items: center;
		justify-content: center;
	`;
	const Form = styled.form`
		margin-top: 30px;
		flex: 7;
		width: 70%;
		height: 70%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
	`;
	const Input = styled.input`
		width: 300px;
		height: 30px;
		font-size: 16px;
		padding: 10px;
		margin-bottom: 10px;
	`;
	const Textarea = styled.textarea`
		width: 300px;
		height: 80px;
		font-size: 16px;
		resize: none;
		padding: 10px;
		margin: 10px 0px;
	`;
	const Btn = styled.button`
		width: 150px;
		height: 30px;
		color: white;
		background-color: rgb(19, 0, 139);
		border: none;
		border-radius: 10px;
		font-size: 16px;
		cursor: pointer;

		&:focus {
			outline: none;
		}
	`;
	const Message = styled.span`
		margin-top: 15px;
		color: crimson;
	`;
	const Icons = styled.div`
		flex: 5;
		display: flex;
		flex-direction: column;
	`;
	const Title = styled.div`
		margin-top: 10px;
	`;
	const Span = styled.span`
		font-size: 18px;
		font-weight: 600;
	`;
	const Desc = styled.div`
		margin: 5px 0px 15px 0px;
		display: flex;

		i {
			margin-right: 10px;
			margin-top: 5px;
		}
		p {
			justify-content: center;
			font-family: sans-serif;
		}
	`;
	const Social = styled.div`
		a {
			i {
				font-size: 30px;
				margin: 10px;
				cursor: pointer;
			}
		}
	`;

	const [message, setMessage] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setMessage(true);
	};
	return (
		<Container>
			<Header>Contact Me</Header>
			<Wrapper>
				<Form onSubmit={handleSubmit}>
					<Input type="text" placeholder="Your name" required />
					<Input type="text" placeholder="Email" required />
					<Input type="text" placeholder="Phone Number" required />
					<Input type="text" placeholder="Subject" required />
					<Textarea placeholder="Message" required />
					<Btn type="submit">Send</Btn>
					{message && <Message>Thanks, I'll reply ASAP :)</Message>}
				</Form>
				<Icons>
					<Title>
						<Span>Address :</Span>
						<Desc>
							<i className=" add fa-solid fa-location-dot" />
							<p>Dhaka,Bangladesh</p>
						</Desc>
					</Title>
					<Title>
						<Span>Contact Number :</Span>
						<Desc>
							<i className="fa-solid fa-phone" />
							<p>+88 01941659179</p>
						</Desc>
					</Title>
					<Title>
						<Span>Email Address :</Span>
						<Desc>
							<i className="fa-solid fa-envelope" />
							<p>habibthealien@gmail.com</p>
						</Desc>
					</Title>
					<Social>
						<a href="https://www.facebook.com/habibthealien/">
							<i
								style={{ color: " #4267B2" }}
								className="fa-brands fa-facebook"
							/>
						</a>
						<a href="https://github.com/HabibTheAlien">
							<i style={{ color: "black" }} className="fa-brands fa-github" />
						</a>
						<a href="https://twitter.com/HabibTheAlien">
							<i
								style={{ color: " #00acee" }}
								className="fa-brands fa-twitter"
							/>
						</a>
						<a href="https://www.linkedin.com/in/habibur-rahman-a02666212/">
							<i
								style={{ color: " #0072b1" }}
								className="fa-brands fa-linkedin"
							/>
						</a>
					</Social>
				</Icons>
			</Wrapper>
		</Container>
	);
};

export default Contact;
