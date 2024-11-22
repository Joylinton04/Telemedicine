type Payment = {
    id: string
    age: number
    gender: 'Male' | 'female'
    amount: number
    status: 'INPATIENT' | 'OUTPATIENT'
    email: string
    name: string
  }
  
  export const payments: Payment[] = [
    {
      id: "728ed52f",
      age: 29,
      gender: 'Male',
      amount: 100,
      status: "INPATIENT",
      email: "m@example.com",
      name: 'John Smith',
    },
    {
      id: "728ed52f",
      age: 29,
      gender: 'Male',
      amount: 100,
      status: "INPATIENT",
      email: "m@jonh.com",
      name: 'John Smith',
    },
    {
      id: "728ed52f",
      age: 29,
      gender: 'female',
      amount: 100,
      status: "OUTPATIENT",
      email: "m@example.com",
      name: 'John Smith',
    },
    {
      id: "728ed52f",
      age: 29,
      gender: 'Male',
      amount: 100,
      status: "OUTPATIENT",
      email: "smith@gmail.com",
      name: 'John Smith',
    },
    {
      id: "728ed52f",
      age: 29,
      gender: 'Male',
      amount: 100,
      status: "OUTPATIENT",
      email: "m@example.com",
      name: 'John Smith',
    },
    
  ]
  