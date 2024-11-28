import AppointmentLineChart from '@/components/charts/AppointmentLineChart';
import ArrivalChart from '@/components/charts/ArrivalChart';
import FinancialChart from '@/components/charts/FinancialChart';
import PatientChart from '@/components/charts/PatientChart';
import { ArrowDownRight, ArrowUpRight, ChartNoAxesColumn, DollarSign, List, MapPinned, UserPlus } from 'lucide-react';
import { columns } from "../Datatable/Column"
import { DataTable } from "../Datatable/DataTable"
import { data } from '@/Datatable/Data';


const Home = () => {

  return (
    <div className='p-4 pb-6 ssm:p-2'>{/* h-[calc(100vh-70px)] */}
      <div className='flex flex-col h-full'>
        <div className='flex flex-col gap-1'>
          <div className='font-bold text-2xl font-main3 ssm:text-lg'>👋🏼 Welcome Back, Dr. Adu Atakora!</div>
          <div className='text-sm text-textSoft ssm:text-xs'>You have access to all the necessary tools and resources to manage your patient care.</div>
        </div>

        {/* grid system */}
        <div className='gridlayout mt-6 mdd:grid-cols-4'>
            <div className='box bg-white flex flex-col justify-between mdd:col-span-2 ssm:col-span-4 shadow-sm bg-gradient-to-br from-green-100 to-white'>
                <div className='flex gap-2 items-center'>
                  <p className='border border-green-400 rounded-lg p-1'><UserPlus strokeWidth={3} size={'20px'} className='text-green-500'/></p>
                  <span className='text-sm font-bold'>Patient Record</span>
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='flex gap-1 items-center'>
                    <span className='font-bold text-3xl'>556</span>
                    <ArrowUpRight size={'12px'} strokeWidth={3} className='text-green-500 ml-4'/>
                    <span className='text-xs text-green-500'>142</span> 
                    <span className='text-xs'>last month</span>
                  </div>
                  <div className='w-full flex gap-1'>
                    <div className='rounded h-2 bg-yellow-400 w-[20%]'></div>
                    <div className='rounded h-2 bg-[#29a27c] w-[50%]'></div>
                    <div className='rounded h-2 bg-[#fc3e3ec8] w-[30%]'></div>
                  </div>
                  <div className='flex text-xs items-center gap-3'>
                    <div className='flex items-center gap-1'>
                      <div className='h-2 w-2 rounded-full bg-yellow-400'></div>
                      <div className='lgg:text-[11px]'>120 Inpatient</div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <div className='h-2 w-2 rounded-full bg-[#29a27c]'></div>
                      <div className='lgg:text-[11px]'>330 Outpatient</div>
                    </div>
                    <div className='flex items-center gap-1'>
                      <div className='h-2 w-2 rounded-full bg-yellow-400'></div>
                      <div className='lgg:text-[11px]'>45 Emergency</div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='box bg-white flex flex-col gap-6 mdd:col-span-2 mdd:hidden shadow-sm'>
                <div className='flex gap-2 items-center'>
                  <p className='border border-green-400 rounded-lg p-1'><UserPlus strokeWidth={3} size={'20px'} className='text-green-500'/></p>
                  <span className='text-sm font-bold'>Total Patients</span>
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-2 flex-col'>
                      <span className='font-bold text-3xl'>2,567</span>
                      <div className='flex gap-2'>
                        <ArrowUpRight size={'12px'} strokeWidth={3} className='text-green-500'/>
                        <span className='text-xs text-green-500'>142</span> 
                        <span className='text-xs'>last month</span>
                      </div>
                  </div>
                  <div className='h-[85px] w-[80px]'>
                    <PatientChart/>
                  </div>
                </div>
            </div>
            <div className='box bg-white flex flex-col gap-6 mdd:col-span-2 ssm:col-span-4 shadow-sm bg-gradient-to-br from-purple-100 to-white'>
                <div className='flex gap-2 items-center'>
                  <p className='border border-purple-500 rounded-lg p-1'><MapPinned size={20} strokeWidth={3} className='text-purple-600'/></p>
                  <span className='text-sm font-bold'>New Appointment</span>
                </div>
                <div className='flex justify-between items-center'>
                  <div className='flex gap-2 flex-col'>
                      <span className='font-bold text-3xl'>220</span>
                      <div className='flex gap-2'>
                        <ArrowDownRight size={'12px'} strokeWidth={3} className='text-red-500'/>
                        <span className='text-xs text-red-500'>142</span> 
                        <span className='text-xs'>last month</span>
                      </div>
                  </div>
                  <div className='h-[85px] w-[85px]'>
                    <AppointmentLineChart/>
                  </div>
                </div>
            </div>
            <div className='box col-span-2 row-span-2 w-full h-full bg-white flex flex-col gap-4 mdd:col-span-4 ssm:col-span-5 shadow-sm'>
                <div className='flex gap-2 items-center'>
                  <p className='border border-green-500 rounded-lg p-1'><ChartNoAxesColumn size={20} strokeWidth={5} className='text-green-500'/></p>
                  <span className='text-sm font-bold'>Patient Statistics</span>
                </div>
                <div className='h-[80%] w-full lgg:-ml-8 ssm:mt-6 ssm:-ml-10'>
                  <ArrivalChart/>
                </div>
            </div>
            <div className='box row-span-2 w-full h-full bg-white flex flex-col gap-8 mdd:col-span-4 shadow-sm bg-gradient-to-br from-green-50 to-white'>
                <div className='flex gap-2 items-center'>
                  <p className='border border-green-500 rounded-lg p-1'><DollarSign size={20} strokeWidth={2.75} className='text-green-500'/></p>
                  <span className='text-sm font-bold'>Financial Flow</span>
                </div>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col'>
                      <span className='font-main3 text-3xl font-bold'>$5,306.00</span>
                      <div className='flex gap-1 items-center'>
                        <ArrowUpRight size={'12px'} strokeWidth={3} className='text-green-500'/>
                        <span className='text-xs text-green-500 font-bold'>$1,200</span> 
                        <span className='text-xs'>last month</span>
                      </div>
                    </div>
                    <div className='flex items-center gap-12'>
                      <div className='h-[140px] w-[130px]'>
                        <FinancialChart/>
                      </div>
                      <div className='flex flex-col gap-6'>
                          <div className='flex flex-col gap-1'>
                            <div className='flex items-center gap-1'>
                              <span className='w-2 h-2 rounded-full bg-blue-500'></span>
                              <span className='text-gray-500 text-sm lgg:text-xs lgg:whitespace-nowrap'>Pending Revenue</span>
                            </div>
                            <div className='font-main3 font-bold text-xs ml-3'>$900.01</div>
                          </div>
                          <div className='flex flex-col gap-1'>
                            <div className='flex items-center gap-1'>
                              <span className='w-2 h-2 rounded-full bg-yellow-400'></span>
                              <span className='text-gray-500 text-sm lgg:text-xs lgg:whitespace-nowrap'>Recieved Revenue</span>
                            </div>
                            <div className='font-main3 font-bold text-xs ml-3'>$3,549.00</div>
                          </div>
                      </div>
                    </div>
                </div>
            </div>
            <div className='box col-span-3 row-span-2 w-full h-full bg-white mdd:row-[4] mdd:col-span-4 ssm:row-[3] shadow-sm'>
              <div className="container mx-auto p-2 -mt-3 ssm:p-1">
                <DataTable columns={columns} data={data.slice(0,6)} title="Patients List"/>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
