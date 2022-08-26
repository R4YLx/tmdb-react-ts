import { useNavigate } from "react-router-dom";

import { PersonProp } from "../../interfaces/IPerson";

import { Card } from "flowbite-react";
import ButtonComp from "../partials/ButtonComp";

import placeholder from "../../assets/person_placeholder.png";

const PersonDetails = ({ person }: PersonProp) => {
	const imgUrl = "https://image.tmdb.org/t/p/original";

	const navigate = useNavigate();

	const onPrevious = () => {
		navigate(-1);
	};

	return (
		<Card horizontal={true}>
			{/* Previous button */}
			<ButtonComp string={"Back"} onPrevious={onPrevious} />

			<div className="flex flex-col gap-2">
				{/* Person image */}
				<img
					className="mb-3 h-32 w-32 md:h-48 md:w-48 rounded-full shadow-lg object-cover self-center"
					src={
						person?.profile_path
							? `${imgUrl}${person?.profile_path}`
							: placeholder
					}
					alt="Person image"
				/>

				{/* Person name */}
				<h5 className="mb-1 text-2xl font-semibold text-gray-900 self-center">
					{person?.name}
				</h5>

				<div className="divider m-0"></div>

				<div className="flex flex-wrap gap-4">
					{/* Birthday */}
					{person?.birthday && (
						<p className="font-medium text-gray-700">
							Born:{" "}
							<span className="text-sm text-gray-500 font-normal">
								{person?.birthday}

								{/* Place of birth */}
								{person?.place_of_birth && (
									<span className="text-sm text-gray-500 font-normal">
										{" "}
										in {person?.place_of_birth}
									</span>
								)}
							</span>
						</p>
					)}

					{/* Death day */}
					{person?.deathday ? (
						<p className="font-medium text-gray-700">
							Died:{" "}
							<span className="text-sm text-gray-500 font-normal">
								{person?.deathday}
							</span>
						</p>
					) : (
						""
					)}

					{/* Biography */}
					{person?.biography ? (
						<div>
							<p className="font-medium text-gray-700 py-2 ">Biography: </p>
							<p className="text-sm text-gray-500">{person?.biography}</p>
						</div>
					) : (
						<p className=" italic">Missing biography. Soon to updated</p>
					)}
				</div>
			</div>

			{/* Also known as / other names */}
			{person?.also_known_as?.length !== 0 && (
				<div>
					{/* Divider */}
					<div className="divider m-0"></div>

					<p className="font-medium text-gray-700">Also known as:</p>

					<ul className="py-2">
						{person?.also_known_as?.map((alias: string, i: number) => (
							<li key={i} className="text-sm text-gray-500 ">
								{alias}
							</li>
						))}
					</ul>
				</div>
			)}

			{/* <ActorMoviesList id={person?.id} /> */}

			{/* Previous button */}
			<ButtonComp string={"Back"} onPrevious={onPrevious} />
		</Card>
	);
};

export default PersonDetails;
