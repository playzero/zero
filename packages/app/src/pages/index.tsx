import Link from "next/link";
import Layout from "../components/Layout";

import Button from "components/lib/Button";

export default () => (
	<Layout title="Home | Next.js + TypeScript Example">
		<h1>Hello Next.js 👋</h1>
		<p>
			<Link href="/about">
				<a>About</a>
			</Link>
			<Button>BUTTON</Button>
		</p>
	</Layout>
);
