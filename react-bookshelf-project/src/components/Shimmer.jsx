import "./Shimmer.css";

 function Shimmer({children}) {
	
		return(
			<div className="white">
				<div className="shimmer">
					{children}
				</div>
			</div>
		);
}

export default Shimmer