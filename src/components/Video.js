import React from "react";
import "../styles/Video.css";

const Video = () => {
	return (
		<section className="Video">
			<article className="content">
				<header>
					<h2>reference video</h2>
				</header>
				<section className="video-animate">
					<iframe
						title="Hitesh Choudhary web challenge reference video"
						src="https://www.youtube-nocookie.com/embed/hqvGOPB0KmQ"
						frameBorder="0"
						allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
					></iframe>
				</section>
			</article>
		</section>
	);
};

export default Video;
