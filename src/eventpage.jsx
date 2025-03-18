import React from "react";
import Events from "./pastevent";
import UpcomingEvents from "./event";

const EventPage = () =>{
    return(
        <div className="">
            <UpcomingEvents></UpcomingEvents>
            <Events></Events>
        </div>
    )
}

export default EventPage;