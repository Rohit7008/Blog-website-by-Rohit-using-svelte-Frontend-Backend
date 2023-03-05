import { getPostById } from '../../lib';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	const data = await getPostById(params.slug);
	//   console.log(data)
	if (data) {
		return {
			post: data
		};
	}
	return {
		status: 500,
		body: new Error('Internal Server Error')
	};
}
