
								function showRow() {
							
									var selectedOption = document.getElementById("options").value;
	
									
									if (selectedOption == "Civil Engineering Works") {
	
										document.getElementById("content").innerHTML =
											`<div id="row1">
											<div  >
											<div class="form-group">
												<div class="form-field">
													<div class="select-wrap">
														<div class="icon"><span class="fa fa-chevron-down"></span></div>
														<select name="Sub selection" id="options" class="form-control">
															<option value="">Select Your Services</option>
															<option value="Geo-Technical Investigation">Geo-Technical Investigation</option>
															<option value="Architectural plans">Architectural plans</option>
															<option value="Construction">Construction</option>
															<option value="Structural Detailing and Drawing">Structural Detailing &amp; Drawing</option>
															<option value="Chemical Research">Chemical Research</option>
															<option value="Planning, Supervision and Management of construction works">Planning, Supervision and Management of construction works</option>
															<option value="Other Services">Other Services</option>
														</select>
													</div>
												</div>
											</div>
											</div>
										</div>`;
									}
									else if (selectedOption == "In-Situ Investigative Works") {
										document.getElementById("content").innerHTML =
											`<div id="row2">
											<div>
												<div class="form-group">
													<div class="form-field">
														<div class="select-wrap">
															<div class="icon"><span class="fa fa-chevron-down"></span></div>
															<select name="Subselect" id="suboptions" class="form-control">
																<option value="">Select Your Services</option>
																<option value="Standard Penetration Tests (S.P.T.)">Standard Penetration Tests (S.P.T.)</option>
																<option value="Dynamic Cone Penetration Tests ">Dynamic Cone Penetration Tests (DCPT)</option>
																<option value="In-situ Shear Test">In-situ Shear Test</option>
																<option value="Liquefaction Potential Study">Liquefaction Potential Study</option>
																<option value="In-situ Permeability Test (soil and rock)">In-situ Permeability Test (soil &amp; rock)</option>
																<option value="Density Test">Density Test</option>
																<option value="Pile Load Test (Vertical, Lateral and Uplift)">Pile Load Test (Vertical, Lateral and Uplift)</option>
																<option value="Plate Load Test">Plate Load Test</option>
																<option value="Other Services">Other Services</option>
															</select>
														</div>
													</div>
												</div>
											</div>
										</div>`;
									}
									else if (selectedOption == "Laboratory test and Reports") {
										document.getElementById("content").innerHTML = `						<div id="row3" >
								<div>
									<div class="form-group">
										<div class="form-field">
											<div class="select-wrap">
												<div class="icon"><span class="fa fa-chevron-down"></span></div>
												<select name="Sub selection" id="options" class="form-control">
													<option value="">Select Your Services</option>
													<option value="Soil test">Soil test</option>
													<option value="Chemical analysis of soil">Chemical analysis of soil</option>
													<option value="Chemical analysis of water">Chemical analysis of water</option>
													<option value="Test for Coarse Aggregates">Test for Coarse Aggregates</option>
													<option value="Test For Fine Aggregates">Test For Fine Aggregates</option>
													<option value="Test for Cement">Test for Cement</option>
													<option value="Test for Concrete">Test for Concrete</option>
													<option value="Other Services">Other Services</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>`;
									}
	
									else if (selectedOption == "Consultancy") {
										document.getElementById("content").innerHTML = `						<div id="row4" >
								<div>
									<div class="form-group">
										<div class="form-field">
											<div class="select-wrap">
												<div class="icon"><span class="fa fa-chevron-down"></span></div>
												<select name="Sub selection" id="options" class="form-control">
													<option value="">Select Your Services</option>
													<option value="Structural design and drawings of buildings">Structural design and drawings of buildings
													</option>
													<option value="Structural design and drawings of bridges">Structural design and drawings of bridges
													</option>
													<option value="Geotechnical and Structural Design of Foundations">Geotechnical and Structural Design of Foundations</option>
													<option value="Retaining Structures">Retaining Structures</option>
													<option value="Embankments">Embankments</option>
													<option value="Ground Improvement and stabilization">Ground Improvement and stabilization</option>
													<option value="Geosynthetics, Geogrid, Geocell">Geosynthetics, Geogrid, Geocell</option>
													<option value="Stone columns">Stone columns</option>
													<option value="Nailing reticulated micro piles dowels">Nailing reticulated micro piles dowels</option>
													<option value="Cement stabilization, Lime stabilization ">Cement stabilization, Lime stabilization </option>
													<option value="Ground water lowering and control">Ground water lowering and control</option>
													<option value="Other Services">Other Services</option>
												</select>
											</div>
										</div>
									</div>
								</div>
							</div>;
	
									}
									else{
										document.getElementById("content").innerHTML = ``;
	
									}
	
	
								}
	
								// function  quote(){
								// 	var fname = document.getElementById("fname").value;
								// 	var lname = document.getElementById("lname").value;
								// 	var phone = document.getElementById("phone").value;
								// 	var msg = document.getElementById("msg").value;
	
	
	
								// }
	
							