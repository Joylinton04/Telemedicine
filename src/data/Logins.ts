export interface user {
    id: string
    name: string;
    password: string;
    email: string;
    role: "Doctor" | "Patient";
}

export const data: user[] = [
    {
        id: "1",
        name: "Adu Atakora",
        password: "123",
        email: "adujoy989@gmail.com",
        role: "Doctor",
    },
    {
        id: "2",
        name: "Linton",
        password: "123",
        email: "adujoy05@gmail.com",
        role: "Patient",
    }
];