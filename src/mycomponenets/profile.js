import React from "react";

class Profile extends React.Component {
    render() {
        return (
            <div>
                <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                <div class="profile-pic">
                    <label class="-label" for="file">
                      <span class="glyphicon glyphicon-camera"></span>
                      <span>Change Image</span>
                    </label>
                    <input id="file" type="file" onchange="loadFile(event)"/>
                    <img src="assets/https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" id="output" width="150" />
                  </div>     
            </div>
            
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="col-md-10 nk-block-des">
                        <h4 class="nk-block-title">Profile Setting</h4>
                        

                    </div>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><span class="data-label"/>FirstName<input type="text" class="form-control" placeholder="firstname" value=""/></div>
                    <div class="col-md-6"><span class="data-label"/>Lastname<input type="text" class="form-control" value="" placeholder="lastname"/></div>
                </div>
                
                <div class="row mt-3">
                    <div class="col-md-12"><span class="data-label"/>Employee Number<input type="text" class="form-control" placeholder="Enter Employee Number" value=""/></div>
                    <div class="col-md-12"><span class="data-label">Phone Number</span><input type="tel" class="form-control" placeholder="Enter phone number" value=""/>
                        
                    </div>
                    <div class="col-md-12"><span class="data-label"/>Date of birth<input type="date" class="form-control" placeholder="Enter DOB" value=""/></div>
                    
                    <div class="col-md-12"><span class="data-label"/>Name of Department & School/Research Centre<input type="text" class="form-control" placeholder="" value=""/></div>
                    <div class="col-md-12"><span class="data-label"></span>Date of Joining<input type="date" class="form-control" placeholder="Enter DOJ" value=""/></div>
                    <div class="col-md-12"><span class="data-label"></span>Whether Awarded PhD<input type="text" class="form-control" placeholder="" value=""/></div>
                    <div class="col-md-12"><span class="data-label"></span>Year Awarded PhD<input type="text" class="form-control" placeholder="" value=""/></div>
                    <div class="col-md-12"><span class="data-label"/>Email ID<input type="email" class="form-control" placeholder="enter email id" value=""/></div>
                    
                    <div class="col-md-12"><span class="profile-ud-label"/>Current Gross Salary<input type="text" class="form-control" placeholder="" value=""/></div>
                        
                    
                </div>
                {/* <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
                </div> */}
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
        </div>
        
        {/* <div class="col-md-4">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center experience"><span class="data-label">Edit Experience</span></div><br>
                <div class="col-md-12"><span class="data-label">Experience in Designing<input type="text" class="form-control" placeholder="experience" value=""></div> <br>
                <div class="col-md-12"><span class="data-label">Additional Details<input type="text" class="form-control" placeholder="additional details" value=""></div>
            </div>
        </div> */}
    </div>
</div>

        )
        }
    }
    export default Profile