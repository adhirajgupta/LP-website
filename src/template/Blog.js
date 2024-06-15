import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Instagram from '@mui/icons-material/Instagram';

const sections = [
];

const mainFeaturedPost = {
	title: 'Judith Wright',
	description:
		`Judith Wright (1915-2000) was an influential Australian poet, environmentalist, and activist, renowned for her lyrical and evocative poetry that often explored themes of nature, identity, and social justice. Born in Armidale, New South Wales, she spent much of her life in Queensland, which greatly influenced her work. Wright's poetry is characterized by its deep connection to the Australian landscape and its indigenous history. Over her prolific career, she published numerous collections, including "The Moving Image" (1946), "Woman to Man" (1949), and "The Gateway" (1953). Beyond her literary contributions, Wright was a passionate advocate for Aboriginal land rights and environmental conservation, co-founding the Wildlife Preservation Society of Queensland. Her activism and poetry have left an enduring legacy in Australian literature and social history.`,
	image: require('../../src/images.jpeg'),
	// image: require('../logo 4..png'),
	imageText: 'main image description',
	linkText: 'Fill up the Google Form',
};

const featuredPosts = [
	{
		title: 'Introduction',
		date: 'July 26',
		description:
			`'Request to a Year' is a captivating
poem through which the speaker
expresses her desire to be more
like her great-great-grandmother.
This wish is the gift that she wants
to receive this year.
`,
	},

	{
		title: 'Featured Post',
		date: 'Dec 23',
		description:
			`The poem is riveting to read
because it captures a life or death
moment. Of course the reader
wonders the determination the
great great grand grandmother
possesses and the fact that she
was able to capture such a
moment before it passed . The
woman made the best she could
out of a bad situation
`,
	},
	{
		"title": "Featured Post",
		"date": "Aug 26",
		"description": `
In this poem, the poet celebrates her ancestors and the things around her. She begins the poem by personifying 'year' as a metaphor for 'gift'. She wants her great-great-grandmother's talent of painting as a gift. Over here, 'year' also alludes to the memories we make throughout those 365 days and is requesting for another year so that she could master her own art form like her great-great-grandmother.
    `
	},
	{
		"title": "Enjambment",
		"date": "Sep 13",
		"description": `
The poet has used enjambment throughout the poem. This creates an effect of a memory flowing out, as seen in the poem, and establishes a sentimental tone. This suggests that this memory is very close to her heart, reiterating the adulation she holds for her great-great-grandmother and her ardent wish to be more like her.
    `
	},

	{
		title: 'Analysis',
		date: 'Nov 12',
		description:
			`In stanza 3 the poet uses the
effect of foreshadowing and the
pause which occurs at the end of
the second line of the third stanza
allows time for the reader to
consider what might follow next. In
the fourth stanza the mention of
the line "which luckily later caught
him on the way" in parantheses is
an interesting choice as it further
displays her passion towards her
art. She was more invested in her
artwork.
`,
	},
	{
		title: 'Featured Post',
		date: 'Oct 9',
		description:
			`Despite of having eight children
whom she had to look after, she
continued her passion for art
which is inspiring and is celebrated
in this poem. The poet highly
appreciates and celebrates her
artwork that she 'hastily sketched'
using kinetic visual images of her
child drifting away by a current and
her daughter trying to save him.
The phonic alliterations of 'painting
pictures' and 'difficult distances'
are plosives adding onto the metric
beauty of the poem along with
illustrating the fear and pressure
the great-great grandmother was
under as she was helplessly
sketching this horrific scene from a
far distance
`,
	},
	{
		title: 'Structure of the poem',
		date: 'Jan 13',
		description:
			`
			

The poem is written in free verse and is six stanzas long, with
the last one being a couplet.
Supporting the main idea, it is also
seen that she really looks up to her
and thus celebrates her through
this poem which is displayed
through the connotative diction of
'attitude' that shows the great-
great grandmothers optimistic and
positive attitude towards art. She
characterises her as a 'legendary
devotee of art' that praises and
celebrates her talent and illustrates
how committed she was.
`,
	},
];


const sidebar = {
	title: '',
	description: "",
	// 'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
	archives: [
		// { title: 'March 2020', url: '#' },
		// { title: 'February 2020', url: '#' },
		// { title: 'January 2020', url: '#' },
		// { title: 'November 1999', url: '#' },
		// { title: 'October 1999', url: '#' },
		// { title: 'September 1999', url: '#' },
		// { title: 'August 1999', url: '#' },
		// { title: 'July 1999', url: '#' },
		// { title: 'June 1999', url: '#' },
		// { title: 'May 1999', url: '#' },
		// { title: 'April 1999', url: '#' },
	],
	social: [
		{ name: 'Instagram', icon: Instagram },
	],
};

const theme = createTheme();

export default function Blog() {





	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Container maxWidth="lg">
				<Header title="Request to a Year" sections={sections} />
				<main>
					<MainFeaturedPost post={mainFeaturedPost} />
					<Grid container spacing={4}>
						{featuredPosts.map((post) => (
							<FeaturedPost key={post.title} post={post} />
						))}
					</Grid>
				</main>
				<div style={{ marginBottom: 10 }}>

				</div>
			</Container>
		</ThemeProvider>
	);
}
