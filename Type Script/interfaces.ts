interface Customer{
    id:string;
    name:string;
    telephone:string;
}

class SimpleCustomer implements Customer{
    id:string;
    name:string;
    telephone:string;
}

class VipCustomerImpl implements Customer{
    id:string;
    name:string;
    telephone:string;
    membershipNumber:string;
}