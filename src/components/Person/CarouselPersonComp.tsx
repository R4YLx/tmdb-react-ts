import { Link } from "react-router-dom";
import { IPerson } from "../../interfaces/IPerson";
import placeholder from "../../assets/person_placeholder.png";

const CarouselPersonComp = ({ people }: { people: IPerson[] }) => {
	const imgUrl = "https://image.tmdb.org/t/p/w500";

	return (
		<div className="w-full">
			<div className="carousel carousel-center p-4 space-x-4 bg-white shadow-inner shadow-zinc-200 rounded-box">
				{people &&
					people?.map((person: IPerson) => (
						<figure key={person.id} className="carousel-item relative">
							<Link to={`/person/${person.id}`}>
								<img
									src={
										person?.profile_path
											? `${imgUrl}${person?.profile_path}`
											: placeholder
									}
									alt="Movie poster"
									className="rounded-box max-h-60 shadow-sm shadow-zinc-700"
								/>
							</Link>
							<figcaption className="absolute bottom-0 p-2 h-2/6 text-white text-base bg-black bg-opacity-60 rounded-b-xl w-full">
								{person.name}
							</figcaption>
						</figure>
					))}
			</div>
		</div>
	);
};

export default CarouselPersonComp;
