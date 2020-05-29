import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import { camelToSnakeCase } from '../../util/helper_functions';

const ActivityForm = (props) => {
    const [activityData, setActivityData] = useState({
        sport: 1,
        title: "Afternoon run",
        distance: 21.73,
        elevation: 618,
        hours: "test",
        mins: "text",
        secs: "text",
        startDate: new Date(),
        routeId: null
    });

    //handle numeric text entry separately

    const handleChange = e => {
        setActivityData({...activityData, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(activityData);
    };

    return (
        <div className="activity-form-container">
            <h1>Manual Activity Entry</h1>
            <div>
                <form className="activity-form">
                    <div className="upper-form">
                        <div className="fieldset">
                            <label> Distance
                                <input 
                                    type="number" 
                                    value={activityData.distance}
                                    name="distance"
                                    onChange={handleChange}
                                /> miles
                            </label>
                        </div>
                        <div className="fieldset">
                            <label> Duration </label>
                                <input 
                                    type="number" 
                                    value={activityData.hours}
                                    name="hours"
                                    onChange={handleChange}
                                /> 
                                <input
                                    type="number"
                                    value={activityData.mins}
                                    name="mins"
                                    onChange={handleChange}
                                /> 
                                <input
                                    type="number"
                                    value={activityData.secs}
                                    name="secs"
                                    onChange={handleChange}
                                /> 
                        </div>
                        <div className="fieldset">
                            <label> Elevation
                                <input 
                                    type="number"
                                    value={activityData.elevation}
                                    name="elevation"
                                    onChange={handleChange} 
                                /> feet
                            </label>
                        </div>
                    </div>
                    <div className="lower-form">
                        <div className="fieldset">
                            <label> Sport
                                <select name="sport">
                                    <option value="1">Ride</option>
                                    <option value="2">Run</option>
                                </select>
                            </label>
                        </div>
                        <div className="fieldset">
                            <label> Date / Time </label>
                            <DatePicker
                                selected={activityData.startDate}
                                onChange={date => setActivityData({ ...activityData, startDate: date })}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={10}
                                timeCaption="time"
                                dateFormat="MMMM d, yyyy h:mm aa"
                            />
                        </div>
                        <div className="fieldset">
                            <label> Title
                                <input 
                                    type="text" 
                                    value={activityData.title}
                                    name="title"
                                    onChange={handleChange} 
                                />
                            </label>
                        </div>
                    </div>   
                </form>
            </div>
            
        </div>
    )

}


export default ActivityForm;