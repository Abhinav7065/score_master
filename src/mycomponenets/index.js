import React from "react";
import { ReactDOM } from "react";
class Index extends React.Component {
    constructor(props){
      super(props);
       this.state = {
         clicked: false
       };
    }
    myClick = () => {
      this.setState({
        clicked:true
      });
    };
    render() {
      const style= {
        marginLeft: "-50%"
      };
        return (
            <div>

<div class="wrapper">
    <div className="title-text">
      <img src="assets/images/logo.png" class="centerImage"  alt="LOGO"/>
          {/* </center> */}
    </div>
    <div className="form-container">
      <div className="slide-controls">
        <input type="radio" name="slide" onClick={this.myClick} style={this.state.clicked ? style:null} id="login" checked/>
        <input type="radio" name="slide" id="signup"/>
        <label for="assets/login" className="slide login" id='login'>Login</label>
        <label for="assets/signup" className="slide signup" id="signup">Signup</label>
        <div className="slider-tab"></div>
      </div>
      <div className="form-inner">
        <form action="#" className="login">
          <div className="field">
            <input type="text" placeholder="Email Address" required/>
          </div>
          <div className="field">
            <input type="password" placeholder="Password" required/>
          </div>
          <div className="pass-link"><a href="#">Forgot password?</a></div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Login"/>
          </div>
          <div className="signup-link">Not a member? <a href="#">Signup now</a></div>
        </form>
        <form action="#" class="signup">
          <div className="field">
            <input type="text" placeholder="Email Address" required/>
          </div>
          <div className="field">
            <input type="text" placeholder="Name" required/>
          </div>
          <div className="field">
            <input type="password" placeholder="Password" required/>
          </div>
          <div className="field btn">
            <div className="btn-layer"></div>
            <input type="submit" value="Signup"/>
          </div>
        </form>
      </div>
    </div>
  </div>

                
  
            </div>
            
        )
    }
}
export default Index