import React from "react";
import { withRouter } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Spinner from "react-bootstrap/Spinner";

const TableDiv = styled.div`
	// background-color: red;
	// color: blue;
	text-align: center;
`;

class ComponentsList extends React.Component {
	render() {
		return (
			<div className='container-fluid'>
				<div className='row-fluid'>
					<div className='span12'>
						<TableDiv>
							<table
								className='components-list table table-striped table-hover'
								style={{ margin: "auto" }}>
								<thead className='thead-dark'>
									<tr>
										<th>Select</th>
										<th>Producer</th>
										<th>Type</th>
										<th>Price</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
										{this.props.isFetching && (
											<tr>
												<td colSpan='5'>
													<Spinner animation='border' role='status'>
														<span className='sr-only'>Loading...</span>
													</Spinner>
												</td>
											</tr>
										)}
									{this.props.list &&
										this.props.list.map((row, index) => {
											return (
												<tr key={index}>
													<td>
														<Form.Check
															type='radio'
															aria-label='list-selector'
															onChange={(e) => {
																console.log(e.target.value);
															}}
														/>
													</td>
													{Array.from(row.keys()).map((key) => {
														if (key === "id") {
															return (
																<td key={key}>
																	<Button
																		id={row.get(key)}
																		onClick={(e) => {
																			const link =
																				"/components-view/" + e.target.id;
																			this.props.history.push(link);
																		}}>
																		Details
																	</Button>
																</td>
															);
														}
														return <td key={key}>{row.get(key)}</td>;
													})}
												</tr>
											);
										})}
								</tbody>
							</table>
						</TableDiv>
					</div>
				</div>
			</div>
		);
	}
}

ComponentsList.protoTypes = {
	isFetching: Boolean,
	list: Array.isRequired,
};

export default withRouter(ComponentsList);
