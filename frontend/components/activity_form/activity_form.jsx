import React, { useState, useEffect } from 'react';

import { camelToSnakeCase } from '../../util/helper_functions';

const ActivityForm = (props) => {
    
    return (
        <div className="activity-form-container">
            <h1>Manual Activity Entry</h1>
            <div>
                <form className="activity-form">
                    <div className="upper-form">
                        <div className="fieldset">
                            <label> Distance
                                <input type="text" /> miles
                            </label>
                        </div>
                        <div className="fieldset">
                            <label> Duration
                                <input type="text" /> miles
                            </label>
                        </div>
                        <div className="fieldset">
                            <label> Elevation
                                <input type="text" /> miles
                            </label>
                        </div>
                    </div>
                    <div className="lower-form">
                        <div className="fieldset">
                            <label> Sport
                                <input type="text" /> miles
                            </label>
                        </div>
                        <div className="fieldset">
                            <label> Sport
                                <input type="text" /> miles
                            </label>
                        </div>
                        <div className="fieldset">
                            <label> Sport
                                <input type="text" /> miles
                            </label>
                        </div>

                    </div>
                    
                </form>
            </div>
            
        </div>
    )

}

// class ActivityForm extends React.Component {
//     constructor(props) {
//         super(props);
//         // if (this.props.formType === 'Create') {
//         //     this.state = {
//         //         distance: '',
//         //         duration: ''
//         //     }
//         // }
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Activity Form coming here!</h1>
//                 <h1>Activity Form coming here!</h1>
//                 <h1>Activity Form coming here!</h1>
//                 <h1>Activity Form coming here!</h1>
//             </div>
//         )
//     }

// };

export default ActivityForm;