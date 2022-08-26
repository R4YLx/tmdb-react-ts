import { Button } from "flowbite-react";

type ButtonProps = {
	string: string;
	onPrevious?: () => void;
};

const ButtonComp = ({ string, onPrevious }: ButtonProps) => {
	return (
		<Button gradientDuoTone="purpleToBlue" onClick={onPrevious}>
			<p className="hover:text-pink-400 text-base">{string}</p>
		</Button>
	);
};

export default ButtonComp;
