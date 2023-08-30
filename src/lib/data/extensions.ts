export type Stage = {
	name: string;
	image: string;
};

export type Extension = {
	name: string;
	video: string;
	image: string;
	duration: number;
	description: string;
	stage: Stage;
};

const stages = {
	marioKartStadium: {
		name: 'Mario Kart Stadium',
		image: 'https://mario.wiki.gallery/images/0/09/MK8_Mario_Kart_Stadium_Course_Icon.png'
	},
	sweetSweetCanyon: {
		name: 'Sweet Sweet Canyon',
		image: 'https://mario.wiki.gallery/images/a/ad/MK8_Sweet_Sweet_Canyon_Course_Icon.png'
	}
};

export const extensions: Extension[] = [
	{
		name: 'Before Anti-Gravity',
		video:
			'https://www.youtube.com/embed/AowEf4BWfhw?si=FfFKHvMMB7gbPx3-&amp;clip=Ugkxq_uZGQrudE1xhY_lnHccEq6_xCmllO2N&amp;clipt=EGQY0IwB',
		image: '/images/mario-kart-stadium.png',
		duration: 10,
		description: 'Before Anti-Gravity, use the bullet before hitting the ramp.',
		stage: stages.marioKartStadium
	},
	{
		name: 'In the Donut!',
		video:
			'https://www.youtube.com/embed/AowEf4BWfhw?si=eQTKCuN5mJGTzA7u&amp;clip=UgkxcpIcPrZlO9ZavrXIwCXajzNdrcRBXsf3&amp;clipt=EKuVARjungI',
		image: '/images/sweet-sweet-canyon.png',
		duration: 10,
		description: 'Entering the donut in the shortcut near the end of the track.',
		stage: stages.sweetSweetCanyon
	}
];
