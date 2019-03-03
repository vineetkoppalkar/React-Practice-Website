import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
		<div>
			<Jumbotron>
				<Container>
					<h2>Welcome to this websiteksdhfksd</h2>
					<p>This is how to build a website with react bootstrap</p>
				</Container>
			</Jumbotron>
			<Container>
				<Row className="show-grid text-center">
					<Col className="person-wrapper">
						<Image src="assets/ai-blur-codes-577585.jpg" roundedCircle className="profile-pic" />
						<h3>Vineet</h3>
						<p>Only think about one thing at a time. Don't get greedy. Even the worst thing we can do here is good. At home you have unlimited time. In life you need colors</p>
					</Col>
					<Col className>
						<p>You have freedom here. The only guide is your heart. Anytime you learn something your time and energy are not wasted. Just pretend you are a whisper floating across a mountain. Only eight colors that you need. We can fix anything. We'll throw some old gray clouds in here just sneaking around and having fun.</p>
						<p>Just think about these things in your mind - then bring them into your world. It's so important to do something every day that will make you happy. That is when you can experience true joy, when you have no fear. Let's do that again.</p>
						<p>La- da- da- da- dah. Just be happy. You have to allow the paint to break to make it beautiful. Let's make a happy little mountain now. Go out on a limb - that's where the fruit is. Put it in, leave it alone.</p>
						<p>Isn't that fantastic that you can create an almighty tree that fast? Little trees and bushes grow however makes them happy. Look around, look at what we have. Beauty is everywhere, you only have to look to see it. We don't really know where this goes - and I'm not sure we really care. I'm gonna add just a tiny little amount of Prussian Blue.</p>
					</Col>
				</Row>
			</Container>
		</div>
    );
  }
}

export default Home;
