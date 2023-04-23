export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export  const dummyEmployeeList: IEmployee[] = [
    {
    id: new Date().toJSON().toString(),
    firstName: "Miles",
    lastName: "Jac",
    email: "milesjac@gmail.com",
}
];