import "./Shimmer.css";

function Shimmer({ children }) {

	// shimmer effect with CSS to be added to other componenets
	return (
		<div className="white">
			<div className="shimmer">
				{children}
			</div>
		</div>
	);
}

export default Shimmer