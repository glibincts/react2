import React, { Component } from 'react';
// import ReactDom from 'react-dom' 

class Services extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid text-center">
                <div className="row">
                    <h3>Our Services</h3>
                </div> 
                <div className="row">
                    <div className="col-sm-4">
                        <h5>WebApp</h5>
                    </div>
                    <div className="col-sm-4">
                        <h5>MobileApp</h5>
                    </div> 
                    <div className="col-sm-4">
                        <h5>SEO</h5>
                    </div>   
                </div> 
            </div>
         );
    }
}
 
export default Services;