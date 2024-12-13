import { useAppSelector } from '@/redux/store';
import React from 'react'
import Appointments from './Appointments';
import PatientAppointments from './patients/PatientAppointments';

const AllAppointments = () => {
const user = useAppSelector((state) => state.currentUser);
  return (
    <div>
      {user?.isDoctor? <Appointments/> : <PatientAppointments/>}
    </div>
  )
}

export default AllAppointments;
