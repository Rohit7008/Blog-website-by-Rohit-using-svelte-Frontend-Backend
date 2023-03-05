import { getPets, getPosts } from '../lib';

export async function load({}) {
	const data = await getPosts();
	if (data) {
		return {
			posts: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
