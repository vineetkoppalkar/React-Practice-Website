import React, { Component } from 'react';
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap';
import './News.css';

class News extends Component {
	render() {
		return (
			<div>
				<Image src="assets/computer-desk-electronics-238118 Cropped.jpg" className="news-image-banner" />
				<Container className="content">
					<h1>News</h1>	
					<Row>
						<Col xs={6} md={4}>
							<Card>
								<Card.Img variant="top" className src="assets/beautiful-daylight-environment-709552 Cropped.jpg" />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										We're trying to teach you a technique here and how to use it. Look at them little rascals. From all of us here, I want to wish you happy painting and God bless, my friends. We'll make some happy little bushes here.
										<br />
										<br />
										It's almost like something out of a fairytale book. Use what happens naturally, don't fight it. No worries. No cares. Just float and wait for the wind to blow you around.
									</Card.Text>
									<Button variant="primary">Learn more!</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={6} md={4}>
							<Card>
								<Card.Img variant="top" className src="assets/adventure-blur-cartography-408503 Cropped.jpg" />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										We're trying to teach you a technique here and how to use it. Look at them little rascals. From all of us here, I want to wish you happy painting and God bless, my friends. We'll make some happy little bushes here.
										<br />
										<br />
										It's almost like something out of a fairytale book. Use what happens naturally, don't fight it. No worries. No cares. Just float and wait for the wind to blow you around.
									</Card.Text>
									<Button variant="primary">Learn more!</Button>
								</Card.Body>
							</Card>
						</Col>
						<Col xs={6} md={4}>
							<Card>
								<Card.Img variant="top" className src="assets/architecture-building-city-1098460 Cropped.jpg" />
								<Card.Body>
									<Card.Title>Card Title</Card.Title>
									<Card.Text>
										We're trying to teach you a technique here and how to use it. Look at them little rascals. From all of us here, I want to wish you happy painting and God bless, my friends. We'll make some happy little bushes here.
										<br />
										<br />
										It's almost like something out of a fairytale book. Use what happens naturally, don't fight it. No worries. No cares. Just float and wait for the wind to blow you around.
									</Card.Text>
									<Button variant="primary">Learn more!</Button>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default News;