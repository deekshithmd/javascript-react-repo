import React from "react";
import Star from "../../assets/star.png";
import StarB from "../../assets/starb.png";

export default function Rating() {
    const [rating, setRating] = React.useState(0);
    return (
        <div>
            {Array(5)
                .fill(0)
                .map((item, index) => {
                    return (
                        <span key={index}>
                            <img
                                src={rating >= index + 1 ? Star : StarB}
                                height="20px"
                                width="20px"
                                alt="rating"
                                onClick={() =>
                                    rating === 1 ? setRating(0) : setRating(index + 1)
                                }
                            />
                        </span>
                    );
                })}
        </div>
    );
}
