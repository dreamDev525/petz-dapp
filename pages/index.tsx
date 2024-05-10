import Layout from '../components/Layout';
import Welcome from '../components/Welcome';
import About from '../components/About';
import JoinDiscord from '../components/JoinDiscord';
import Team from '../components/Team';
import FAQ from '../components/FAQ';


const Index = () => {
	return (
		<Layout
			title='Petz'
			description='4444 Unique Pet NFTs'
		>
			<Welcome />
			<About />
			<JoinDiscord />
			<Team />
			<FAQ />
		</Layout>
	);
};


export default Index;