import React from "react";
// import Star from "../../assets/star.png";
// import StarB from "../../assets/starb.png";
import { Star } from "./star";

import './style.css';

export default function Rating({ initialRating = 0, onChange }) {
    const [rating, setRating] = React.useState(initialRating);

    const handleClick = (index, e) => {
        // To check half star click, we can compare the click position with the middle of the star button
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX;
        const mid = rect.left + rect.width / 2;
        const isLeft = clickX < mid;
        console.log('isLeft', isLeft)

        let newRating = index + 1
        if (newRating === rating) {
            newRating = rating - 1;
        } else {
            newRating = index + 1;
        }
        setRating(newRating);
        onChange?.(newRating);
    }

    return (
        <div className="star-container">
            {
                Array.from({ length: 5 }).map((_, index) => {

                    return (
                        <button className={`star-btn ${index < rating ? 'filled' : ''}`} onClick={(e) => handleClick(index, e)}>
                            <Star />
                        </button>
                    )
                })
            }
        </div>
    )

    // return (
    //     <div>
    //         <h1>Rating</h1>
    //         {Array(5)
    //             .fill(0)
    //             .map((item, index) => {
    //                 return (
    //                     <button
    //                         style={{
    //                             background: "transparent", border: "none", padding: '0px'
    //                         }}
    //                         key={index}
    //                         onClick={() =>
    //                             rating === 1 ? setRating(0) : setRating(index + 1)
    //                         }>
    //                         <img
    //                             src={rating >= index + 1 ? Star : StarB}
    //                             height="20px"
    //                             width="20px"
    //                             alt="rating"
    //                         />
    //                     </button>
    //                 );
    //             })}
    //     </div >
    // );
}
