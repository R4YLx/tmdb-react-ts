import { Dropdown } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";
import { IGenres } from "../../interfaces/IGenres";

type DropdownProps = {
	onResetGenreFilter: () => void;
	genres?: IGenres[];
	onGenre: any; //* setSearchParams
};

const DropdownList = ({
	onResetGenreFilter,
	genres,
	onGenre,
}: DropdownProps) => {
	return (
		<Dropdown
			gradientDuoTone="purpleToBlue"
			label="Filter genres"
			size="sm"
			floatingArrow={true}
			arrowIcon={true}
		>
			<DropdownItem onClick={onResetGenreFilter}>
				<span className="font-bold text-sm">Reset filter</span>
			</DropdownItem>
			{genres?.map((genre: IGenres) => (
				<Dropdown.Item
					key={genre.id}
					onClick={() => {
						onGenre({
							genre_id: genre.id,
						});
					}}
				>
					<span className="text-sm">{genre.name}</span>
				</Dropdown.Item>
			))}
		</Dropdown>
	);
};

export default DropdownList;
