function Technologies() {
	return (
		<div className="flex justify-center items-center bg-white">
			<div className="mx-auto max-w-full px-6 lg:px-8 text-center">
				<h1 className="mt-10 text-3xl text-indigo-400 sm:text-4xl">
					Move faster with cutting-edge AI tools
				</h1>
				<div className="mx-auto my-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-7 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-7">
					<img
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
						src="/logo/huggingface.svg"
						alt="HuggingFace"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
						src="/logo/langchain.png"
						alt="LangChain"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-60 w-full object-contain lg:col-span-1"
						src="/logo/milvus.png"
						alt="Milvus"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-60 w-full object-contain lg:col-span-1"
						src="/logo/openai.png"
						alt="OpenAI"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
						src="/logo/pinecone.svg"
						alt="Pinecone"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-20 w-full object-contain lg:col-span-1"
						src="/logo/weaviate.svg"
						alt="Weaviate"
						width={158}
						height={48}
					/>
					<img
						className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
						src="/logo/spacy.svg"
						alt="spaCy"
						width={158}
						height={48}
					/>
				</div>
			</div>
		</div>
	);
}

export default Technologies;
