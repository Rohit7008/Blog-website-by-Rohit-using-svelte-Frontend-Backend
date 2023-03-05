<script>
	import SKitlogo from '/src/assets/Sveltekit.png';
	import Rskit1 from '/src/assets/RouteSkit1.jpeg';
	import Lskit1 from '/src/assets/layoutskit1.jpeg';
	import Dskit1 from '/src/assets/Dynamic.jpeg';
	import BPskit1 from '/src/assets/Blogp.jpeg';
	import BPost1 from '/src/assets/BP1.jpeg';
	import BPost2 from '/src/assets/BP2.jpeg';
	import LPost from '/src/assets/Listingpost.jpeg';
	import LPost2 from '/src/assets/Listingpost2.jpeg';
</script>

<div class="p-8">
	<a href="/" class="hover:underline">Back</a>
	<div class="p-8  border-style: solid ">
		<h1 class=" text-center font-semibold p-4 text-2xl">
			How I built a Blog with Svelte & SvelteKit
		</h1>
		<img src={SKitlogo} alt="Sveltekit logo " />
		<div class="prose ">
			<h1>What Is Svelte & SvelteKit?</h1>
			<p class="p-2">
				Svelte is a JavaScript framework, Svelte does not use a virtual DOM such as React or Vue for
				handling the state of the app. The fact that no virtual DOM is used allows Svelte to be
				truly reactive. This means that we don’t have to do any hacks or boilerplate code to get a
				variable to rerender when we update the value. I think everyone who has written a React
				application sometimes has had trouble with this. In Svelte, when we update a click counter
				etc, It automatically updates, no useEffects, useState, or other hooks. This is how a simple
				button component that increments a count, and printing that counter looks.
				<br />
				<br />
				The cool thing about Svelte is that everything that is inside the same component is scoped. So
				changing the p color to red will only affect the component that the css is declared in. One thing
				that made me love Go, is the easy syntax and low boilerplate. Svelte promises the same thing
				but for Web applications. Another cool thing about Svelte is that instead of allowing the Browser
				to do most of the processing, the server handles that. The Web applications are Compiled before
				shipping them to production, allowing the server to perform a bunch of build optimizations. This
				makes creating blazing-fast websites an easy task. Once you start learning Svelte, it won’t take
				long before you are faced with the term SvelteKit. While Svelte is the JavaScript framework,
				SvelteKit is an Application Framework. SvelteKit is used to build applications using Svelte,
				it adds a bunch of features. The two most important according to me are the following.
			</p>
		</div>
		<div class="prose p-4">
			<h1>What is Sveltkit ?</h1>
			<p class="p-2">
				SvelteKit is a framework built on top of that. It is an opinionated set of rules that helps
				you get a Svelte app built pretty quickly. You can compare it to NextJS (for React) or Nuxt
				(for Vue). It has great defaults and encourages good practices, like server-side rendering,
				for example. At the time of building this website, SvelteKit was still in Beta. However,
				progress is steady and its API seems to be already stable, so it’s unlikely there will be
				any breaking changes before 1.0 arrives. Using both of the above allowed my website to have
				two important characteristics: Every single page is rendered at build time (server-side
				rendering). This means that as long as the HTML and CSS files are downloaded, it will look
				as it was meant to be; JavaScript is not needed. Try disabling JavaScript on your browser.
				You’ll still be able to read this blog post and everything will look the same.
			</p>
		</div>
		<div>
			<h1 class=" text-3xl text-slate-800">#Routing</h1>
			<p class="p-4 bg-slate-200">
				Initially, SvelteKit used a file-based routing, as opposed to the current folder-based
				routing. This article has been updated to reflect those changes. If you were familiar with
				the previous system, this comment by the SvelteKit team might help you understand the
				changes
			</p>
			<div class="p-2">
				SvelteKit uses a folder-based routing system. This means that your routes are dictated by
				the folder structure inside routes in your project. Every route must have a folder, except
				for the root (’/’). Inside each folder, you can add files that build up your page.
				<br />
				Typically, in other frameworks, you would have a index. html / js / jsx file where everything
				the page needed would be loaded from. In SvelteKit, you can have multiple files, each representing
				a different part of the page. The only required file is +page.svelte. This is where you can add
				your markup, components, styles and logic.
				<br />
				However, it’s likely that your page might need to load some data to be displayed. This can be
				done on another file, +page.js, in the same folder. There, you can add a load function where
				you’ll have access to query params and other things and be able to load all the data your page
				needs. The cool thing about that is that SvelteKit will use the content of the +page.js file
				both server-side and client-side, depending on the situation.
				<br />
				However, if the data you need can only be loaded on the server (like for example querying a database
				or using a secret key), you can name it +page.server.js instead. Both would do the same thing,
				however the naming difference makes it much easier on a quick glance to identify what runs where.
				So, an example of what the basic file structure for my website would look like:
				<img src={Rskit1} alt="Route.svelte 1" class="p-4 bg-zinc-200" />
				Having multiple files in a folder might look a bit cumbersome at first, but it makes their purpose
				much clearer. The great reasoning behind this pattern is that it gives you a single way of doing
				routing instead of multiple, which makes things more standardized and easier to understand later
				on.
				<br />
				Remember, SvelteKit is opinionated on purpose, and I think folder-based routing is more readable
				and I’d say more flexible than other file-based routing solutions, although it is a bit more
				verbose. The +layout.svelte file is a base layout for all the pages inside the route. Which means
				that I can have shared code for all pages in there. See the example below, where I added the
				header and footer components to the layout, and load the content of the route itself in the <slot
				/> element:
				<img src={Lskit1} alt="layout.svelte" class="p-4 bg-zinc-200" />
			</div>
		</div>
		<div class="prose">
			<h1 class="text-slate-800 text-3xl p-4">#Dynamic Routing</h1>
			But what about the blog post page? Well, that one is a special case. If you look at the URL loaded
			right now, you’ll see that it is specific to this blog post. However, that doesn’t mean there is
			one folder for each blog post on the routes directory.
			<br />
			You see, every blog post page is the same one, however its content is loaded based on the URL it
			receives. To achieve this, I used SvelteKit’s dynamic routing with a folder called [slug]. The
			brackets indicate that the route might be dynamic, and whatever URL comes in, it will be caught
			by this folder (unless it’s caught by explicit routes like /blog shown above). Not only that, but
			that part of the URL will be accessible in the page as a parameter (called, in this case, slug).
			This parameter allows the page to know which blog post to display.
			<br />
			However, there’s still an extra step I wanted to take. Blog posts only have their own content,
			but I wanted to add a few extra things on the page that weren’t present in the main +layout.svelte
			file, like the post title and related posts at the bottom. For that, I used a layout group, defining
			that the post page shouldn’t use the main layout, but instead have its own.
			<br />
			To create a layout group, I’ve created a folder inside of routes with the name of the new layout
			blog-article, wrapped in parentheses to indicate it uses its own layout. The routes directory ended
			up like this:
			<img
				src={Dskit1}
				alt="dynamic routing"
				class="bg-zinc-200 p-4
			"
			/>
			Keep in mind that, just like pages, layout files can also have their data-loading counterparts:
			+layout.js and +layout.server.js.
		</div>
		<div class="prose ">
			<h1 class="text-3xl text-slate-800 p-4">#The Blog</h1>
			The main challenge for me was in processing Markdown(.md) files of the blog posts into actual Svelte
			code. Unlike Jekyll, which I was using previously for this blog, SvelteKit doesn’t have anything
			built-in for this (yet) and online resources are a bit scarce (which is normal, since it’s still
			in beta).
			<br />
			I had three requisites for this:
			<br />
			<ul class="list-disc list-inside">
				<li>
					I wanted to write blog posts in Markdown, because of its ease, and also so I wouldn’t have
					to rewrite all the existing posts;
				</li>
				<li>
					I wanted to be able to use Svelte components inside the blog posts as well, for more
					interactive elements;
				</li>
				<li>It has to be rendered on build time so the blog can be deployed to GitHub Pages;</li>
			</ul>
			<p class="p-2">
				I had heard about something similar to what I wanted, called MDX. It allows everything I
				wanted, however, it was React-based and I couldn’t use it. Luckily, I found out about
				MDsveX, a project with the same goal as MDX, but for Svelte!
				<br />
				After setting it up, I had to figure out how to actually use it. I found some examples on the
				internet, which seemed very straightforward. Most of them created a /posts folder inside the
				routes, and then put the .md files in there. MDsveX would do the work of transforming them into
				HTML pages on build, and that was it. However, that meant the post URL would have to become https://fantinel.dev/posts/blog-post-name.
				That isn’t a huge problem by itself, but it was for me because it wouldn’t be backwards-compatible
				with my previous blog URLs, that have been linked to a few times in other sites. I wanted to
				remove the need for “/posts” in the URL to keep that compatibility.
				<br />
				That means my page on routes/[slug]/+page.svelte should need some kind of logic that finds the
				correct blog post to show and dynamically loads the Svelte component generated by MDsveX. Not
				only that, but I needed to be able to extract the metadata of the post - its title, image, and
				date - to be able to display it on the +layout.svelte file, and also displaying the “Recent posts”
				cards on the home page.
			</p>
		</div>
		<div class="prose">
			<h1 class="text-3xl text-slate-800 p-4">#Extracting Post Data</h1>
			<div>
				I found out when searching that we can import all the .md files as modules, and process them
				via JS, since this code will run on the server. I ended up creating a posts.js file to
				centralize this logic, and did the following:
				<img src={BPskit1} alt="postjs.svelte" class="bg-zinc-200 p-4" />
				With that data being exported from that file, I can reuse it in the places I need:
			</div>
		</div>
		<div class="prose">
			<h1 class="text-3xl text-slate-800 p-4">#Blog post page</h1>
			<div>
				On the routes/[slug]/+page.svelte file, I can now import the posts and look for the one I
				should display (by comparing slugs). After that, I’ll get its module and use the special
				svelte:component (see docs) tag to use it inside the page.
				<img src={BPost1} alt="slug/+page.svelte" class="bg-zinc-200 p-4" />
				<div>
					<img src={BPost2} alt="slug/+page.svelte2" />
				</div>
			</div>
		</div>
		<div class="prose">
			<h1 class="text-3xl text-slate-800 p-4">#Listing all posts</h1>
			<div>
				Now the post page is done, we need a way to display all the posts on the main blog page. We
				already have them sorted and filtered in the posts.js file, so all I have to do is fetch
				that data and iterate on it to display them all. Since the posts data comes from the server,
				it needs to run there. I’ll use a blog/+page.server.js file to fetch that data and send it
				to the client-side page.
				<br />
				<br />
				<h2 class="bg bg-zinc-200">blog/+page.server.js</h2>
				<img src={LPost} alt="blog/+page.server.js" class="bg-zinc-200 p-4" />
				And, on the page itself:
				<br />
				<br />
				<div>
					<h2 class="bg bg-zinc-200">blog/+page.server.js</h2>
					<img src={LPost2} alt="blog/+page.server.js" />
				</div>
			</div>
		</div>
		<br />
		<div class="prose">
			<h1 class="text-3xl text-slate-800 p-2">#Rss</h1>
			<div class="p-2">
				Something that SvelteKit currently does not provide a solution for is a RSS feed.
				Previously, mine was built automatically by Jekyll and I never had to do anything to get it
				working. While this wasn’t the case right now, I’m sure once SvelteKit is stable and mature,
				solutions for this will be available so no manual work has to be done. I made mine by taking
				advantage of SvelteKit’s endpoints by creating a +server.js file, and serving a XML file
				that is generated at build time. I import the filtered posts from the posts.js file I
				created earlier, and use the metadata to build the content of the RSS file. You can check
				out the source code for implementation details. #Sitemap.
			</div>
		</div>
		<div class="prose">
			<h1 class="text-3xl text-slate-800 p-2">#Site Map</h1>
			<div class="p-2">
				Another thing that’s still not built-in to SvelteKit is the sitemap. It’s great for SEO,
				especially for newer websites, so I researched a good way of adding one. Luckily, someone
				already built a tool to generate them automatically, and there is already a discussion to
				build it into SvelteKit directly. Check out svelte-sitemap for generating your own.
			</div>
		</div>
		<div class="prose">
			<h1 class="text-3xl text-slate-800 p-2">#Wrapping Up</h1>
			<div class="p-2">
				My first experience with Svelte and SvelteKit was, overall, fantastic. It simplifies many
				parts of development and having server-side-rendering as a default option really drives
				forward their purpose of simplifying web both for users and developers.
				<br />
				Though I definitely did not use all of Svelte’s strengths on this project, since it doesn’t need
				dynamic data and an application state, I’ll be working with that soon enough. Its ecosystem is
				not as big as its competitors’, since Svelte is still small compared to them, but they’re doing
				something right with their new approach, as Svelte is the most loved web framework according
				to 2021’s StackOverflow survey. Not to mention that Svelte itself doesn’t try to reinvent the
				wheel, and therefore is compatible with almost everything JavaScript.
				<br />
				The small issues I’ve had while building this will definitely be gone soon, as they were caused
				by SvelteKit not being on a stable version yet. I’m excited to see how much the ecosystem grows
				the next year; I’ll definitely be keeping an eye on it!
				<br />
				Don’t forget all the code for this website and blog are open source, feel free to use it and
				to propose changes if you’d like!
				<br />
				Thanks for reading!
			</div>
		</div>
		<div class="border-b border-gray-200 justify-center" />
		<div class="items-center">
			<a
				href="https://github.com/rohit7008"
				class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2.5 inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
			>
				<svg
					class="w-4 h-4 mr-2 -ml-1"
					aria-hidden="true"
					focusable="false"
					data-prefix="fab"
					data-icon="github"
					role="img"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 496 512"
					><path
						fill="currentColor"
						d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
					/></svg
				>
				See source code on github
			</a>
		</div>
	</div>
</div>
