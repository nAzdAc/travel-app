import React, { useState, useContext } from 'react';
import { useHttp } from '../hooks/http.hook';
import { routes } from '../utils/routes';
import { AuthContext } from '../context/AuthContext';
import { RatingList } from './RatingList';

const ratingValues = [ 5, 4, 3, 2, 1 ];

export const Rating = ({ attraction }) => {
	const { request } = useHttp();
	const [ ratings, setRatings ] = useState('');
	const [ showUsersArr, setShowUsersArr ] = useState([]);
	const { token, userName } = useContext(AuthContext);

	const postRating = async (value) => {
		try {
			const data = await request(
				routes.postRating,
				'POST',
				{ attraction, value, userName },
				{
					Authorization: `Bearer ${token}`
				}
			);
			console.log(data);
			setShowUsersArr((prev) => (prev = [ ...data ]));
			const allRating = data.map((item) => item.value);
			console.log(allRating);
			const averageRating = allRating.reduce(function(sum, current) {
				return (sum + current) / allRating.length;
			});
			console.log(averageRating);
			setRatings((prev) => (prev = averageRating.toFixed()));
		} catch (e) {}
	};

	return (
		<div className="rating-wrap">
			<div className="rating" value={ratings}>
				{ratingValues.map((item) => {
					return (
						<div className="rating-item" key={item} value={item} onClick={() => postRating(item)}>
							★
						</div>
					);
				})}
			</div>
			<div className="total-value">
				{ratings}
				<div className="all-users-ratings">{<RatingList arr={showUsersArr} />}</div>
			</div>
		</div>
	);
};
