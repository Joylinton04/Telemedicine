export interface user {
    id: string
    username: string;
    Firstname: string;
    Lastname: string;
    password: string;
    email: string;
    isDoctor: boolean;
    gender: string;
}

export interface Doctors {
    id: string;
    password: string;
    photo?: string;
    username: string;
    Firstname: string;
    Lastname: string;
    isDoctor: boolean;
    gender: string;
    specialization: string;
    experience: number;
    email: string;
    phone: string;
    biography: string;
    specializations: string[];
    appointments?: {
        date: string;
        patientName: string;
        purpose: string;
        status: string;
    }[];
    reviews?: {
        patientName: string;
        rating: number;
        comment: string;
    }[];

}

export const patients: user[] = [
    {
        id: "2",
        username: "Joylinton05",
        Firstname: 'Joy',
        Lastname: "Linton",
        password: "123",
        email: "adujoy05@gmail.com",
        isDoctor: false,
        gender: "Male",
    }
];

export const doctors:Doctors[] = [
    {
            id: '123',
            password: '123',
            photo: "/doctor.jpg",
            username: "adujoy989",
            Firstname: "Joy",
            Lastname: "Adu Atakora",
            isDoctor: true,
            gender: "male",
            specialization: "Cardiologist",
            experience: 12,
            email: "adujoy989@gmail.com",
            phone: "+233 245678901",
            biography:
            "Dr. John Doe is a highly experienced cardiologist with over 12 years of experience in treating heart-related conditions. He is dedicated to providing compassionate and personalized care.",
            specializations: [
            "Cardiology",
            "Hypertension Management",
            "Heart Surgery",
            "Echocardiography",
            ],
            appointments: [
            {
                date: "01/11/2024",
                patientName: "Alice Smith",
                purpose: "Routine Checkup",
                status: "Completed",
            },
            {
                date: "25/10/2024",
                patientName: "Bob Johnson",
                purpose: "Follow-Up",
                status: "Pending",
            },
            ],
            reviews: [
            {
                patientName: "Alice Smith",
                rating: 5,
                comment: "Excellent care and attention. Highly recommended!",
            },
            {
                patientName: "Bob Johnson",
                rating: 4,
                comment: "Great doctor, but the wait time was a bit long.",
            },
            ],
    },
]