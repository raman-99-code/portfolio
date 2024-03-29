import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaPython } from "react-icons/fa"
import { SiFortran } from "react-icons/si"	
import { SiQiskit } from "react-icons/si"	
import { SiTensorflow } from "react-icons/si"
const About = () => {
return(
	<section id='about'>
		<h5>Acadamics &</h5>
		<h2>Qualifications</h2>

		<div className='container about__container'>
			<div className="about__me">
				<div className="about__me-image">
					<img src={ME} alt="About Image" />
				</div>
			</div>
			<div className="about__content">
				<div className="about__cards">
					<article className='about__card'>
						<FaPython className='about__icon' />
						<h5>Python</h5>
						<small>Good</small>
					</article>
					<article className='about__card'>
						<SiFortran  className='about__icon' />
						<h5>Fortran</h5>
						<small>Good</small>
					</article>
					<article className='about__card'>
						<SiQiskit  className='about__icon' />
						<h5>Qiskit</h5>
						<small>Good</small>
					</article>
					<article className='about__card'>
						<SiTensorflow className='about__icon' />
						<h5>Tensorflow</h5>
						<small>Good</small>
					</article>
				</div>
				<p>
					As a creative, driven, and adaptable professional, I dedicate my portfolio to showcasing my ability to innovate and execute striking visual content, tailored for your brand. Delve into my unique projects and designs.
				</p>
				<a href="#contact" className='btn btn-primary'>Let's talk</a>
			</div>
		</div>
	</section>
	)
}
export default About