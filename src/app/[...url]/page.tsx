import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import React from "react";

interface PageProps {
	params: {
		url: string | string[] | undefined;
	};
}

function reconstructUrl({ url }: { url: string[] }) {
	const urlParts = url.map((part) => decodeURIComponent(part));

	return urlParts.join("/");
}

const Page = async (params: PageProps) => {
	const reconstructedUrl = reconstructUrl({
		url: params.params.url as string[],
	});

	const isAlreadyIndexed = await redis.sismember(
		"indexed-urls",
		reconstructedUrl
	);

	const sessionId = "session-mock";

	console.log("already indexed", isAlreadyIndexed);

	if (!isAlreadyIndexed) {
		await ragChat.context.add({
			type: "html",
			source: reconstructedUrl,
			config: { chunkOverlap: 100, chunkSize: 400 },
		});

		await redis.sadd("indexed-urls", reconstructedUrl);
	}

	return <div>Page</div>;
};

export default Page;
