<template>
	<div class="page-home page">
		<h2>Description</h2>
		<section class="demo">
			<div class="description">{{ config.description }}</div>
			<div class="section-content">
				<w-time-line />
			</div>
		</section>

		<section class="snippets">
			<Collapse>
				<div class="section-content"><CodeSnippet class="snippet" :code="componentSnippet" lang="html" />
					<div class="plus">+</div>
				</div>
			</Collapse>
		</section>
	</div>
</template>

<script>
import CodeSnippet from '../components/CodeSnippet.vue';
import Collapse from '../components/Collapse.vue';
import { config } from '../config';
const componentSnippet = `
<w-time-line />
`;
export default {
	name: 'Home',
	components: {
		CodeSnippet,
		Collapse,
	},

	data() {
		return {
			// mainSnippet,
			componentSnippet,
			config,
		};
	},
};
</script>
