<script>
    import "./app.css";
	import Navbar from "../components/Navbar.svelte";
	import Footer from "../components/Footer.svelte";
	import PageTransition from "../components/PageTransition.svelte";
	export let data;
</script>

<div>
	<div class="fixed inset-0 flex justify-center sm:px-8">
		<div class="flex w-full max-w-7xl lg:px-8">
			<div class="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
		</div>
	</div>
	<div class="relative">
		<Navbar />
    <main>
			<PageTransition pathname={data.pathname}>
            	<slot />
			</PageTransition>
		</main>
		<Footer />
	</div>
</div>

<style type="text/css">
@keyframes -global-flip-in-diag-2-br {
  0% {
    -webkit-transform: rotate3d(-1, 1, 0, -80deg);
            transform: rotate3d(-1, 1, 0, -80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotate3d(1, 1, 0, 0deg);
            transform: rotate3d(1, 1, 0, 0deg);
    opacity: 1;
  }
}
@keyframes -global-tilt-in-tr {
  0% {
    -webkit-transform: rotateY(-35deg) rotateX(20deg) translate(250px, -250px) skew(-12deg, -15deg);
            transform: rotateY(-35deg) rotateX(20deg) translate(250px, -250px) skew(-12deg, -15deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
            transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}
@keyframes -global-rotate-in-2-fwd-cw {
  0% {
    -webkit-transform: translateZ(-200px) rotate(-45deg);
            transform: translateZ(-200px) rotate(-45deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateZ(0) rotate(0);
            transform: translateZ(0) rotate(0);
    opacity: 1;
  }
}
@keyframes -global-roll-in-blurred-left {
  0% {
    -webkit-transform: translateX(-100px) rotate(-720deg);
            transform: translateX(-100px) rotate(-720deg);
    -webkit-filter: blur(50px);
            filter: blur(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes -global-fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
            transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
}
@keyframes -global-text-focus-in {
  0% {
    -webkit-filter: blur(12px);
            filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
            filter: blur(0px);
    opacity: 1;
  }
}
@keyframes -global-tilt-in-bl {
  0% {
    -webkit-transform: rotateY(35deg) rotateX(-20deg) translate(-250px, 250px) skew(-12deg, -15deg);
            transform: rotateY(35deg) rotateX(-20deg) translate(-250px, 250px) skew(-12deg, -15deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
            transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
    opacity: 1;
  }
}
@keyframes -global-scale-in-center {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
    filter: blur(50px);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
    filter: blur(0px);
    opacity: 1;
  }
}

</style>
