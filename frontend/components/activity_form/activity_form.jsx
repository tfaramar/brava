import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import { unformatDuration } from '../../util/helper_functions';
import SimpleRouteCard from '../routes/simple_route_card';

const ActivityForm = (props) => {
    const [activityData, setActivityData] = useState({
        sport: 1,
        title: "",
        distance: 0,
        elevation: 0,
        hours: "",
        mins: "",
        secs: "",
        startDate: new Date(),
        routeId: null
    });
    const [routeSelected, setRouteSelected] = useState(null);
    const [elevError, setElevError] = useState("");
    const [distError, setDistError] = useState("");
    const [durError, setDurError] = useState("");
    const [titleError, setTitleError] = useState("");

    useEffect (() => {
        props.fetchRoutes();
        setRouteSelected(null);
    }, [activityData.sport]);

    const handleChange = e => {
        setTitleError("");
        setDurError("");
        setElevError("");
        setDistError("");
        setActivityData({...activityData, [e.target.name]: e.target.value});
    };

    const handleTimeChange = e => {
        let num = parseInt(e.target.value);
        
        if (num < 10) {
            setActivityData({ ...activityData, [e.target.name]: `0${num}` });
        } else {
            setActivityData({ ...activityData, [e.target.name]: `${num}` });
        }; 
    }

    const handleFloatChange = e => {
        setElevError("");
        setDistError("");
        setTitleError("");
        setDurError("");
        setActivityData({ ...activityData, [e.target.name]: parseFloat(e.target.value) });
    };

    const handleSportChange = e => {
        let num = parseInt(e.target.value);
        setActivityData({ ...activityData, [e.target.name]: num });
    };

    const selectRoute = (idx) => {
        let r = theseRoutes[idx];
        
        if (routeSelected === idx) {
            let newData = Object.assign({}, activityData);
            newData.distance = "";
            newData.hours = "";
            newData.mins = "";
            newData.secs = "";
            newData.routeId = null;
            setActivityData(newData);
            setRouteSelected(null);
        } else {
            let times = r.time.split(":");
            let newData = Object.assign({}, activityData);
            newData.distance = r.distance;
            newData.hours = times[0];
            newData.mins = times[1];
            newData.secs = times[2];
            newData.routeId = r.id;
            setActivityData(newData);
            setRouteSelected(idx);
        }; 
    };

    const handleSubmit = e => {
        e.preventDefault();

        let inError = false;
        if (!activityData.title.length) {
            setTitleError("Title required.");
            inError = true;
        }
        if (!activityData.distance) {
            setDistError("Distance required.");
            inError = true;
        }
        if (!activityData.elevation) {
            setElevError("Elevation required.");
            inError = true;
        }
        if (!activityData.hours && !activityData.mins && !activityData.secs) {
            setDurError("Some duration required.");
            inError = true;
        } else if (parseInt(activityData.mins) > 59 || parseInt(activityData.secs) > 59) {
            setDurError("This is an invalid duration");
            inError = true;
        };

        if (inError) {
            console.log("y'all got some errs")
            return;
        };

        let time = unformatDuration(parseInt(activityData.hours), parseInt(activityData.mins), parseInt(activityData.secs));
        let activity = {
            user_id: props.user,
            sport: activityData.sport,
            title: activityData.title,
            distance: activityData.distance,
            elevation: activityData.elevation,
            elapsed_time: time,
            route_id: activityData.routeId,
            start_time: activityData.startDate
        };
        console.log(activity);
        // this.props.history.push("/");
    };

    const navigateHome = e => {
        setActivityData({
            sport: 1,
            title: "",
            distance: "",
            elevation: "",
            hours: "",
            mins: "",
            secs: "",
            startDate: new Date(),
            routeId: null
        });
        props.history.push("/");
    };

    let theseRoutes = props.routes && props.routes.length > 0 ? props.routes.filter(route => route.sport === activityData.sport) : [];
    let type = activityData.sport === 1 ? "cycling" : "running";

    return (
        <div className="activity-form-container">
            <h1 className="activity-form-title">{props.message}</h1>
            <div>
                <form onSubmit={handleSubmit} className="activity-form">
                    <div className="upper-form">
                        <div className="fieldset">
                            <label> Distance </label>
                            <div className="compound-input">
                                <input
                                    type="number"
                                    min="0"
                                    step="any"
                                    value={activityData.distance}
                                    name="distance"
                                    onChange={handleFloatChange}
                                /> miles
                            </div>
                            <p className="act-form-error">{distError}</p>
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
                                    onChange={handleTimeChange}
                                />
                                <input
                                    type="number"
                                    placeholder="00 minutes"
                                    min="0"
                                    max="59"
                                    value={activityData.mins}
                                    name="mins"
                                    onChange={handleTimeChange}
                                />
                                <input
                                    type="number"
                                    placeholder="00 seconds"
                                    min="0"
                                    max="59"
                                    value={activityData.secs}
                                    name="secs"
                                    onChange={handleTimeChange}
                                /> 
                            </div>
                            <p className="act-form-error">{durError}</p>
                        </div>
                        <div className="fieldset">
                            <label> Elevation </label>
                            <div className="compound-input">
                                <input
                                    type="number"
                                    value={activityData.elevation}
                                    min="0"
                                    step="any"
                                    name="elevation"
                                    onChange={handleFloatChange}
                                /> feet
                            </div>
                            <p className="act-form-error">{elevError}</p>
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
                            <p className="act-form-error">{titleError}</p>
                        </div>
                    </div>  
                    <p className="route-section-header">If you took one of your regular routes, select it below:</p>
                    <div className="ri-route-feed">
                        {
                            props.routes && theseRoutes.length > 0 ? theseRoutes.map((route, idx) => <SimpleRouteCard key={route.id} idx={idx} route={route} selectRoute={selectRoute} routeSelected={routeSelected} />) : <h2>You haven't created any {type} routes.</h2>
                        } 
                    </div> 
                    <div className="activity-buttons">
                        <button className="submit-activity-button" type="submit">Create</button>
                        <button className="cancel-activity-button" type="button" onClick={navigateHome}>Cancel</button>
                    </div>
                </form>
            </div>
            
        </div>
    )

}


export default ActivityForm;