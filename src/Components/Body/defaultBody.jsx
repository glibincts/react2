import React, { Component } from 'react';
import reactImage from '../images/ThinkPositive.jpg'; 

class DefaultBody extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="row" id='row1'>
                    <div className="col-lg-6 text-center m-auto" >
                        <div className="banner my-auto align-self-center">  
                            <h2 className='text'>Welcome!</h2> 
                            <p className='mt-2 text-white p-4'>"Alone we can do so little, together we can do so much." --Helen Keller</p>
                        </div>
                    </div>
                </div>
                <div className="row" id='row2'>
                    <div className="col-sm-3 colColor">
                        <div className="row marRow">
                            <span><h5>Help Module</h5></span>
                        </div>
                        <div className="row marRow">
                            <span><p>Know what we can do...!</p></span>    
                        </div> 
                        <div className="row marRow">
                            <span className="btn btn-info">View All</span>
                        </div>
                    </div>
                    <div className="col-sm-3 colColor">
                        <div className="row marRow">
                            <span><h5>Categories</h5></span>
                        </div>
                        <div className="row marRow">
                            <span><p>Checkout more about the process</p></span>    
                        </div> 
                        <div className="row marRow">
                            <span className="btn btn-primary">Check-In</span>
                        </div>
                    </div>
                    <div className="col-sm-3 colColor">
                        <div className="row marRow">
                            <span><h5>Interesting..!</h5></span>
                        </div>
                        <div className="row marRow">
                            <span><p>Well we'll show you something different.</p></span>    
                        </div> 
                        <div className="row marRow">
                            <span className="btn btn-success">What!</span>
                        </div>
                    </div>
                    <div className="col-sm-3 colColor">
                        <div className="row marRow">
                            <span><h5>Like us?</h5></span>
                        </div>
                        <div className="row marRow">
                            <span><p>Support with your comments</p></span>    
                        </div> 
                        <div className="row marRow">
                            <span className="btn btn-secondary">Post</span>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default DefaultBody;