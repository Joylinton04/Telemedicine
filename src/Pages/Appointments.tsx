import { data } from "@/Datatable/AppointmentData";
import { columns } from "@/Datatable/Column";
import { DataTable } from "@/Datatable/DataTable";


const Appointments = () => {
  return (
    <div className='p-4 pb-4 overflow-auto'>
        <div className="h-full">
            <div className='flex flex-col gap-1'>
              <div className='font-bold text-2xl font-main3 ssm:text-lg'>View All Your Appointments</div>
              <div className='text-sm text-textSoft ssm:text-xs'>You have access to all the necessary tools and resources to manage your patient care.</div>
            </div>

            <div className="-mt-4 pb-4">
              <div className="container mx-auto p-2 ssm:p-1">
                <DataTable columns={columns} data={data} title="" showIcon={true}/>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Appointments;
