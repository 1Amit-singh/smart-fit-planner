import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="">
			<Link
				href={"/form"}
				className="p-3 inline-block bg-blue-500 rounded-md text-xl"
			>
				Get Started
			</Link>
		</div>
	);
}
