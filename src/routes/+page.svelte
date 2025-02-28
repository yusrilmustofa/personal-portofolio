<script>
	import Stack from "../components/Stack.svelte";
	import Header from "../components/Header.svelte";
	let title = "A Backend Developer, Yusril Mustofa."
	let description = "Every line of code you write is not just syntax, but a small step toward innovation. Keep learning, keep growing because technology never stops, and neither should you!";
</script>
<svelte:head>
	<title>Portofolio</title>
</svelte:head>
<Header main_header={title} main_description={description}/>
<Stack />