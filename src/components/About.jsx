import React, { Component } from 'react';
import { Container, Grid, Col, Image } from 'react-bootstrap';
import './About.css';

class About extends Component {
	render() {
		return (
			<div>
				<Image src="assets/business-camera-coffee-1509428 Cropped.jpg" className="header-image" />
				<Container>
					<Image src="assets/ai-blur-codes-577585.jpg" rounded className="about-profile-pic" />
					
					<div className="about-text">
						<h1>Vineet</h1>
						<p>It's all a game of angles. Everybody's different. Trees are different. Let them all be individuals. Decide where your cloud lives. Maybe he lives right in here. Just a little indication. It's hard to see things when you're too close. Take a step back and look.</p>
						<p>Nothing wrong with washing your brush. This is the fun part The shadows are just like the highlights, but we're going in the opposite direction.</p>
						<p>The only prerequisite is that it makes you happy. If it makes you happy then it's good. Trees get lonely too, so we'll give him a little friend. The least little bit can do so much. We'll throw some happy little limbs on this tree. In this world, everything can be happy. I want everbody to be happy. That's what it's all about.</p>
						<p>It's so important to do something every day that will make you happy. I can't think of anything more rewarding than being able to express yourself to others through painting. When you do it your way you can go anywhere you choose.</p>
					</div>
				</Container>
			</div>
			
		);
	}
}

export default About;