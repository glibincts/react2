import React, { Component } from 'react';
import reactImage from '../images/ThinkPositive.jpg'; 

class DefaultBody extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="container-fluid">
                <div className="row" id='row1'>
                    <div className="col-sm-6" id="bannerImage">
                        <div className="banner1">
                            <img src={reactImage} alt="" width="50%" id="bannerImageID" />
                        </div>
                    </div>  
                    <div className="col-sm-6 text-center m-auto" >
                        <div className="banner my-auto align-self-center">  
                            <h2 className='text-primary'>Welcome to MyApp</h2> 
                            <h5 className='mt-2 text-white p-4'>Hey guys, thanks for watching my new React WebApplication. This is my first project in react webapp</h5>
                        </div>
                    </div>
                </div>
                <div className="row bg-white" id='row2'>
                    <h3>Row 2</h3>
                </div>
            </div>
         );
    }
}
 
export default DefaultBody;