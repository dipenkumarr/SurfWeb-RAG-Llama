import { ChatWrapper } from "@/components/ChatWrapper";
import { ragChat } from "@/lib/rag-chat";
import { redis } from "@/lib/redis";
import { cookies } from "next/headers";
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
	const sessionCookie = cookies().get("sessionId")?.value;

	const reconstructedUrl = reconstructUrl({
		url: params.params.url as string[],
	});

	const sessionId = (reconstructedUrl + "--" + sessionCookie).replace(
		/\//g,
		""
	);

	const initialMessages = await ragChat.history.getMessages({
		sessionId,
		amount: 10,
	});

	const isAlreadyIndexed = await redis.sismember(
		"indexed-urls",
		reconstructedUrl
	);

	console.log("already indexed", isAlreadyIndexed);

	if (!isAlreadyIndexed) {
		await ragChat.context.add({
			type: "html",
			source: reconstructedUrl,
			config: { chunkOverlap: 100, chunkSize: 400 },
		});

		await redis.sadd("indexed-urls", reconstructedUrl);
	}

	return (
		<ChatWrapper sessionId={sessionId} initialMessages={initialMessages} />
	);
};

export default Page;
