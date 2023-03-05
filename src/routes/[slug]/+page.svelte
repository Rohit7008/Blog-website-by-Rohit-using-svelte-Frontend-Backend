<script>
	import { PortableText } from '@portabletext/svelte';
	/**
	 * @type {{ post: { Cont: any; name:string; _updatedAt:string; }[]; }}
	 */
	export let data;
	// <pre>{JSON.stringify(data.post[0].Cont, null, 2)}</pre>
  /**
	 * @type Intl.DateTimeFormatOptions
	 */
	const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
</script>

<a class=" text-gray-500 hover:text-gray-600" href="/">&larr; Back</a>
<h1 class="mt-4 text-3xl font-bold">{data.post[0].name}</h1>

<p class="mt-2 text-gray-500">
	{new Date(data.post[0]._updatedAt).toLocaleString('en-IN', options)}
</p>
<div class="prose mt-4">
	<PortableText value={data.post[0].Cont} />
</div>
