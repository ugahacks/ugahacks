import React, { useState, useEffect } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import { useAuth } from "../context/AuthContext";
import Event, { EventDetail } from "../components/Event";
import RegisterCard, { ApplicationPaths } from "../components/RegisterCard";
import { Events } from "../enums/events";
import { EventStatus } from "../enums/eventStatus";


const EventPage = () => {
    const { user, userInfo, getFirstName, getRegisteredEvents } = useAuth();
    const [firstName, setFirstName] = useState('');
    const [registeredEvents, setRegisteredEvents] = useState({})

    const application_path: ApplicationPaths = {
      application_type: "Participant",
      deadline: "December 31st, 2022",
      page: "/register",
      disabled: Events.hacks8 in userInfo.registered,
    }

    useEffect(() => {
      async function get_first_name() {
        const first_name = await getFirstName();
        setFirstName(first_name)
      }
      async function get_registered_events() {
        const registered_events = await getRegisteredEvents();
        setRegisteredEvents(registered_events)
      }
      get_first_name();
      get_registered_events();
    }, []);

  return (
    <ProtectedRoute>
      <div className="py-2 container mx-auto">
        <div className="text-gray-600 px-12 py-24 mt-24 mx-auto">
          <h2 className="text-2xl font-semibold">Hey {firstName}, this is </h2>
          STATUS: {Events.hacks8 in registeredEvents ? EventStatus.Registered : EventStatus.NotRegistered}
          </div>
          <h1 className="text-2xl"><b>Application Paths:</b></h1>
          <div className="flex">
          <div className="flex-1">
            <RegisterCard {...application_path}/>
          </div>
          <div className="flex-1">
            <RegisterCard {...application_path}/>
          </div>
          </div>
      </div>
    </ProtectedRoute>
  );
};

export default EventPage;