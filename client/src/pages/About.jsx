import styled from "styled-components";

const Container = styled.div`
	background: white;
	display: flex;
	font-family: sans-serif;
`;
const Left = styled.div`
	flex: 4;
`;
const Image = styled.img`
	height: 250px;
	object-fit: cover;
	border-radius: 5px;
	margin: 100px 0px 0px 170px;
`;
const Right = styled.div`
	flex: 8;
	display: flex;
	flex-direction: column;
	margin: 60px 0px 0px 100px;
`;
const Header = styled.h1`
	font-size: 60px;
	font-weight: 300;
	margin-bottom: 20px;
`;
const Desc = styled.div`
	width: 80%;
	margin-bottom: 30px;
	font-size: 18px;
	line-height: 24px;
`;
const Button = styled.button`
	font-family: sans-serif;
	font-size: 16px;
	color: white;
	background-color: rgb(37, 14, 187);
	border: none;
	outline: none;
	border: 1px solid silver;
	font-weight: 100;
	cursor: pointer;
	padding: 10px;
	border-radius: 5px;
	width: 160px;
`;

const About = () => {
	return (
		<Container>
			<Left>
				<Image
					src="https://i.pinimg.com/280x280_RS/f6/a1/31/f6a13117e23704efb550091bb505128c.jpg"
					alt=""
				/>
			</Left>
			<Right>
				<Header>About Me</Header>
				<Desc>
					My name is Habibur Rahman. I am specialized in creating beautiful
					useable web application using MERN Stack. I use powerful technologies
					like MongoDB, React, Next, Node and Express. All my websites are
					lovingly hand coded.
					<br />
					<br />
					For building websites my weapons of choice are Figma, Photoshop and
					illustrate for creating layout. I use CSS, SASS and Styled-Components
					for design. I am able to implement clean code API with security.
					<br />
					<br />
					I have 5 years of experience working with web Development. I build
					many real-life web applications with my hand and use it to solve
					realistic problems.
					<br />
					<br />I live in Dhaka with my mom and my guitar. I love to travel and
					I love my job.
				</Desc>
				<a href="assets/JAHID HASSAN.pdf" download>
					<Button>Downlode Resume</Button>
				</a>
			</Right>
		</Container>
	);
};

export default About;
