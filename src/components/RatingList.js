import React from 'react';

export const RatingList = ({ arr }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>№</th>
					<th>User Name</th>
					<th>Rating</th>
				</tr>
			</thead>

			<tbody>
				{arr.map((item, index) => {
					return (
						<tr key={item.owner}>
							<td>{index + 1}</td>
							<td>{item.name}</td>
							<td>{item.value}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
