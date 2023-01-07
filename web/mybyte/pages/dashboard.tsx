import React, { useState, useEffect } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../context/AuthContext";
import Event, { EventDetail } from "../components/Event";
import {EventStatus} from "../enums/eventStatus";
import { Events } from "../enums/events";

const Hacks8: EventDetail = {
  key: Events.hacks8,
  eventName: "UGA Hacks 8",
  date: "02/05/2023",
  description: "lorem ipsum",
  page: "/events/hacks-8",
}
const events = [{event: <Event {...Hacks8}/>}]

const DashboardPage = () => {
    const { userInfo, setUserInformation } = useAuth();
    //const [firstName, setFirstName] = useState('');



    // useEffect(() => {
    //   async function get_user_information() {
    //     await setUserInformation();
    //     //setFirstName(userInfo.first_name)
    //   }

    //   get_user_information();
    // }, []);

  return (
    <ProtectedRoute>
      <div className="flex py-2 container mx-auto">
        
        <div className="text-gray-600 px-12 py-24 mt-24 mx-auto">
          <h2 className="text-2xl font-semibold">Hey {userInfo.first_name}, welcome to the UGA Hacks Portal!</h2>
          <h2 className="text-2x1 font-semibold">Pick an event from below!</h2>

            {events.map(data => (
              <button key={data.event.key}>{data.event}</button>
            ))}

        </div>
      </div>
    </ProtectedRoute>
  );
};

export default DashboardPage;