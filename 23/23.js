
/* SCROLL REVEAL */
const sr = ScrollReveal({
	origin: 'top',
	distance: '60px',
	duration: 3500,
	delay: 400,
	reset: true,
})

sr.reveal('.home_images')
sr.reveal('.home_name', {origin:'bottom', opacity: 1})
sr.reveal('.plus', {origin:'left', opacity: 0})
sr.reveal('.home_description-1', {origin:'right', opacity: 0, delay: 600})
sr.reveal('.home_description-2', {origin:'left', opacity: 0, delay: 700})
sr.reveal('.arrow', {origin:'bottom', opacity: 0, delay: 1200})
sr.reveal('.home_btn', {origin:'bottom', opacity: 0, delay: 800})