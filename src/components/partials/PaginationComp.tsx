type PaginationProps = {
	page?: string | number | null;
	turnPage?: any;
	genre_id?: number;
	query?: string;
	data?: any;
};

const PaginationComp = ({
	page,
	turnPage,
	genre_id,
	query,
	data,
}: PaginationProps) => {
	return (
		<div className="btn-group py-8">
			{/* Previous Page */}
			<button
				className="btn"
				disabled={page! <= 1 ? true : false}
				onClick={() => {
					turnPage({
						page: Number(page) - 1,
						genre_id: genre_id || "",
						query: query || "",
					});
				}}
			>
				«
			</button>
			{/* Page indicator */}
			<button className="btn">{page}</button>

			{/* Next Page */}
			<button
				className="btn"
				disabled={page! >= data?.total_pages ? true : false}
				onClick={() => {
					turnPage({
						page: Number(page) + 1,
						genre_id: genre_id || "",
						query: query || "",
					});
				}}
			>
				»
			</button>
		</div>
	);
};

export default PaginationComp;
