import React, { useEffect, useRef, useState } from "react";

type SearchProps = {
	onSearch: any; //* setSearchParams
};

const SearchBar = ({ onSearch }: SearchProps) => {
	//* focuses on search form
	const searchInputRef = useRef<HTMLInputElement>(null);

	//* Search input
	const [searchInput, setSearchInput] = useState<string>("");

	//* Handling submit button
	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();

		if (!searchInput.length) {
			return;
		}

		onSearch(searchInput);
	};

	//* focuses on search form
	useEffect(() => {
		searchInputRef.current?.focus();
	}, []);

	return (
		<>
			{/* Search bar for resources */}
			<div className="flex justify-center pt-8">
				<form className="flex gap-4" onSubmit={handleSubmit}>
					<input
						ref={searchInputRef}
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
						required
						className="input input-bordered w-full max-w-xs"
						type="text"
						placeholder="Search..."
					/>
					<button className="btn btn-outline" type="submit">
						Search
					</button>
				</form>
			</div>
		</>
	);
};

export default SearchBar;
