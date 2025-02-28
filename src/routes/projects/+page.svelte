<script>
	import Header from "../../components/Header.svelte";
	import Projects from "../../components/Projects.svelte";
	let header_title = "A Quick Look at My Projects"
	let header_description = "Explore a showcase of my diverse range of web development projects, where I bring ideas to life with innovative solutions and captivating user experiences. From frontend design to backend functionality, discover the culmination of my skills and creativity in these carefully crafted web applications and websites."
</script>
<svelte:head>
	<title>Portofolio | Projects</title>
</svelte:head>

<Header main_header={header_title} main_description={header_description} place_socials={false}/>
<Projects />
