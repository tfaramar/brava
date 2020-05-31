import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import { camelToSnakeCase, unformatDuration } from '../../util/helper_functions';

const ActivityForm = (props) => {
    const [activityData, setActivityData] = useState({
        sport: 1,
        title: "Afternoon run",
        distance: 0,
        elevation: 0,
        hours: "",
        mins: "",
        secs: "",
        startDate: new Date(),
        routeId: null
    });

    const handleChange = e => {
        setActivityData({...activityData, [e.target.name]: e.target.value});
    };

    const handleTimeChange = e => {
        let num = parseInt(e.target.value);
        if (num > 59) {
            //set error on input
        } else {
            setActivityData({ ...activityData, [e.target.name]: num });
        }  
    }

    const handleFloatChange = e => {
        setActivityData({ ...activityData, [e.target.name]: parseFloat(e.target.value) });
    };

    const handleSportChange = e => {
        let num = parseInt(e.target.value);
        setActivityData({ ...activityData, [e.target.name]: num });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(activityData);
        // unformatDuration(activityData.hours, activityData.mins, activityData.secs)
    };

    return (
        <div className="activity-form-container">
            <h1 className="activity-form-title">Manual Activity Entry</h1>
            <div>
                <form onSubmit={handleSubmit} className="activity-form">
                    <div className="upper-form">
                        <div className="fieldset">
                            <label> Distance </label>
                            <div className="compound-input">
                                <input
                                    type="number"
                                    min="0"
                                    value={activityData.distance}
                                    name="distance"
                                    onChange={handleFloatChange}
                                /> miles
                            </div>
                        </div>
                        <div className="fieldset">
                            <label> Duration </label>
                            <div className="compound-input">
                                <input
                                    type="number"
                                    placeholder="00 hours"
                                    min="0"
                                    value={activityData.hours}
                                    name="hours"
                                    onChange={handleChange}
                                />
                                <input
                                    type="number"
                                    placeholder="00 minutes"
                                    min="0"
                                    max="59"
                                    value={activityData.mins}
                                    name="mins"
                                    onChange={handleChange}
                                />
                                <input
                                    type="number"
                                    placeholder="00 seconds"
                                    min="0"
                                    max="59"
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
                                    onChange={handleFloatChange}
                                /> feet
                            </div>
                        </div>
                    </div>
                    <div className="lower-metaform">
                        <div className="lower-form">
                            <div className="fieldset">
                                <label> Sport </label>
                                <select className="custom-select" name="sport" onChange={handleSportChange}>
                                    <option value="1">Ride</option>
                                    <option value="2">Run</option>
                                </select>
                                 
                            </div>
                            <div className="fieldset">
                                <label> Date &amp; Time </label>
                                <DatePicker
                                    selected={activityData.startDate}
                                    onChange={date => setActivityData({ ...activityData, startDate: date })}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    timeCaption="time"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                            </div>
                        </div>
                        <div className="fieldset">
                            <label> Title </label>
                                <input 
                                    type="text" 
                                    value={activityData.title}
                                    name="title"
                                    onChange={handleChange} 
                                />
                        </div>
                    </div>  
                    <div className="route-content">
                        BUNCH OF ROUTES TO CHOOSE FROM BASED ON SPORT TYPE
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