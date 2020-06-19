import React from "react";
import styled from "styled-components";

const TableDiv = styled.div`
	// background-color: red;
	// color: blue;
	text-align: center;
`;

class ListView extends React.Component {
	render() {
		return (
			<div className='container-fluid'>
				<div className='row-fluid'>
					<div className='span12'>
						<TableDiv>
							<table className='components-list' style={{ margin: "auto" }}>
								<thead>
									<tr>
										<th>Select</th>
										<th>Producer</th>
										<th>Type</th>
										<th>Price</th>
									</tr>
								</thead>
							</table>
						</TableDiv>
					</div>
				</div>
			</div>
		);
	}
}

export default ListView;
