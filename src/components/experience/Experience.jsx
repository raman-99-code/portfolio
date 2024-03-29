import React from 'react'
import './experience.css'
import { FaCheck } from "react-icons/fa"
const Experience = () => {
return(
<section id='experience'>
	<h5>Skills I have</h5>
	<h2>Experience</h2>
	<div className="container experience__container">
		<div className="experience__frontend">
			<h3>Frontend Development</h3>
			<div className="experience__content">
				<article className="experience_details">
					<FaCheck />
				</article>
			</div>
		</div>
		<div className="experience__backend">
			
		</div>
	</div>

</section>
	)
}
export default Experience