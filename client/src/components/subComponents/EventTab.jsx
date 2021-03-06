
//	TAB ON LEFT SIDE BAR FOR EACH EVENT. EACH EVENT WILL HAVE ONE OF THESE.
import React, { PropTypes } from 'react';
import { Link } from 'react-router';

var tabColor =()=> {
	var colours = new Array();
	colours[0] = "black";
	colours[1] = "blue";
	colours[2] = "green";
	colours[3] = "orange";
	colours[4] = "pink";

	var newColor = Math.floor(Math.random()*colours.length);
	document.getElementById("eventStyle").style.backgroundColor=colours[newColor];
}



const EventTab = ({headliner, date, changeEvent}) => {
	
	if (date){
		var newEventDate = new Date(date);
		var eventDate = newEventDate.toDateString();
	}

	return (
		<div className="row">

			<div className="hoverable  cyan lighten-2 col s12 event-tab" id="eventStyle" style={{padding: "0", width:"100%", borderBottomStyle:"solid", borderColor: "white", borderWidth: "1px", overflow: "scroll"}}>
				<div >
					{ headliner && <Link onClick={changeEvent} to={'/dash/event'}><h5 className="left truncate artistTab">{headliner}</h5></Link> }
					{ eventDate && <p className="left tabDate">{eventDate}</p>}
					<Link className="btn-floating btn-small tiny waves-effect waves-light deep-purple accent-2 hoverable right material-icons" style={{ margin:"10px"}} onClick={changeEvent} to={'/dash/add-guest'} ><i className="medium material-icons">perm_identity</i></Link>



				</div>
			</div>
		</div>
	);
}

EventTab.propTypes = {
    //headliner: PropTypes.string.isRequired,
    //date: PropTypes.string.isRequired,
	//eventId: PropTypes.string.isRequired,
	//selectEvent: PropTypes.func.isRequired
};

export default EventTab;
