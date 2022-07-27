export class Employee {
    empId:number;
    name:string;
    email:string;
    bankAccount:number;
    address:string;
    designation:string;
    salary:number;
    department:number;

    constructor(empId:number,name:string,
                email:string,
                bankAccount:number,
                address:string,
                designation:string,
                salary:number, department:number){

                    this.empId = empId;
                    this.name = name;
                    this.email = email;
                    this.bankAccount = bankAccount;
                    this.address = address;
                    this.designation = designation;
                    this.salary = salary;
                    this.department = department;

    }
}


/*
private int empId;
	@NotNull(message = "employee name cannot be null")
	private String name;
	@Email(message = "Enter Valid Email")
	private String email;
	private int bankAccount;
	private String address;
	private String designation;
	@Min(message = "min salart is 500",value = 500)
	private int salary;


*/