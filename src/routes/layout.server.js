export const ssr = true;
export const preload = true;

export const load = async ({ url: { pathname } }) => {
	return { pathname };
};