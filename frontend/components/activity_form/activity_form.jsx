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
            <h1 className="activity-form-title">Manual Activity Entry</h1>
            <div>
                <form className="activity-form">
                    <div className="upper-form">
                        <div className="fieldset">
                            <label> Distance </label>
                            <input 
                                type="number" 
                                value={activityData.distance}
                                name="distance"
                                onChange={handleChange}
                            /> miles
                        
                        </div>
                        <div className="fieldset">
                            <label> Duration </label>
                            <div className="compound-input">
                                <input
                                    type="number"
                                    placeholder="00 hours"
                                    value={activityData.hours}
                                    name="hours"
                                    onChange={handleChange}
                                />
                                <input
                                    type="number"
                                    placeholder="00 minutes"
                                    value={activityData.mins}
                                    name="mins"
                                    onChange={handleChange}
                                />
                                <input
                                    type="number"
                                    placeholder="00 seconds"
                                    value={activityData.secs}
                                    name="secs"
                                    onChange={handleChange}
                                /> 
                            </div>
                        </div>
                        <div className="fieldset">
                            <label> Elevation </label>
                            <div className="compound-input">
                                <input
                                    type="number"
                                    value={activityData.elevation}
                                    name="elevation"
                                    onChange={handleChange}
                                /> feet
                            </div>
                        </div>
                    </div>
                    <div className="lower-form">
                        <div className="fieldset">
                            <label> Sport </label>
                            <select name="sport">
                                <option value="1">Ride</option>
                                <option value="2">Run</option>
                            </select>
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
                    <div className="route-content">
                        Routes to be shown here based on the sport type
                    </div> 
                    <div className="activity-buttons">
                        <button className="submit-activity-button" type="submit">Create</button>
                        <button className="cancel-activity-button" type="button">Cancel</button>
                    </div>
                </form>
            </div>
            
        </div>
    )

}


export default ActivityForm;