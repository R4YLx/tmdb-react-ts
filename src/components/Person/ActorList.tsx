import { Link } from "react-router-dom";

import { IPerson, PersonProp } from "../../interfaces/IPerson";

import placeholder from "../../assets/person_placeholder.png";

const ActorList = ({ cast }: PersonProp) => {
	const imgUrl = "https://image.tmdb.org/t/p/w185";

	return (
		<>
			<table className="border-separate p-4 bg-gray-900 bg-opacity-70 rounded-md">
				<thead>
					<tr>
						<th className="text-left underline">Actor</th>
						<th className="text-left underline">Character</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{cast &&
						cast?.map((actor: IPerson) => (
							<tr key={actor.id}>
								<td>
									<div className="flex flex-wrap pr-6">
										<div className="flex items-center space-x-3 py-4">
											<div className="avatar">
												<div className="mask mask-squircle w-12 h-12">
													{/* Actor image */}
													<img
														src={
															actor?.profile_path
																? `${imgUrl}${actor?.profile_path}`
																: placeholder
														}
														alt="Actor image"
													/>
												</div>
											</div>

											{/* Actor name */}
											<Link
												to={`/person/${actor?.id}`}
												className="cursor-pointer hover:underline"
											>
												<p className="font-bold text-sm cursor-pointer">
													{actor?.name}
												</p>
											</Link>
										</div>
									</div>
								</td>

								{/* Character name */}
								<td className="text-sm">{actor?.character}</td>

								{/* Button for more details about actor */}
								<th className="hidden md:table-cell">
									<Link to={`/person/${actor?.id}`} className="cursor-pointer">
										<button className="btn btn-ghost btn-xs">details</button>
									</Link>
								</th>
							</tr>
						))}
				</tbody>
			</table>
		</>
	);
};

export default ActorList;
