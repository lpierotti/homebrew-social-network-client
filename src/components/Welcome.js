import React from 'react'

export default function Welcome() {
	return (
		<div>
			<img src='/homebrew-home.jpg' alt='' style={{position: 'relative', maxHeight: '970px'}}/>
			
			<div className='welcomeDiv' style={{ maxWidth: '800px', zIndex: '1', position: 'absolute', top: '200px', left: '100px'}}>
				<p className='welcome'>Brew For You is a social networking app built around anything involving homebrew. Homebrewers are a tight knit community but it can be hard to reach out to brewers who may be thousands of miles away. This is the goal of Brew For You, to bring homebrewers together and create a place that allows brewers to meet new people and find amazing recipes. </p>
			</div>
			<div style={{backgroundColor: 'rgba(0,0,0,.7)', bottom: '0px', minHeight: '50px'}}>
			</div>
		</div>
	)
}