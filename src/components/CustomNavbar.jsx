import React, { Component } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

class CustomNavbar extends Component {
	render() {
		return (
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="/">Vineet's Website</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
						<Nav className="justify-content-end">
							<Nav.Item>
								<Nav.Link href="/">Home</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/about">about</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link href="/news">news</Nav.Link>
							</Nav.Item>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		);
	}
}

export default CustomNavbar;