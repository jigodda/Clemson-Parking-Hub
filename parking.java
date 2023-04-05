import java.util.Scanner;

class PermitType {
    public static void main(String[] args){
        permit();
    }

    public static void permit(){
        String category = "None";
        System.out.println("What type of permit do you have?");
        Scanner myObj = new Scanner(System.in);
        String permitInput = myObj.nextLine();

        if(permitInput.equals("Commuter") || permitInput.equals("Apartment") || permitInput.equals("East Resident")|| permitInput.equals("West Resident")){
            category = "Student";
        } else if (permitInput.equals("Employee")){
            category = "Employee";
        }

        if(category.charAt(0) == 'A' || category.charAt(0) == 'E' || category.charAt(0) == 'I' || category.charAt(0) == 'O' || category.charAt(0) == 'U' || category.charAt(0) == 'Y'){
            System.out.println("You have an " + category + " permit.");
        } else {
            System.out.println("You have a " + category + " permit.");
        }
        
        System.out.println("You can park in these locations:\n");

        if(permitInput.equals("Commuter")){
            System.out.println("C Lots");
            System.out.println("Employee Spaces (Weekdays, 4:30 PM to 7:00 AM)");
            System.out.println("Employee Spaces (Weekends, 4:30PM Friday to 7 AM Monday)");

        } else if(permitInput.equals("Apartment")){
            System.out.println("Calhoun Courts");
            System.out.println("Thornhill");
            System.out.println("Lightsey");
            System.out.println("R4");
            System.out.println("R4 Ext");
            System.out.println("Employee Spaces (Weekdays, 7:30PM to 7 AM)");
            System.out.println("Employee Spaces (Weekends, 4:30PM Friday to 7 AM Monday)");
        } else if(permitInput.equals("West Resident")){
            System.out.println("R3");
            System.out.println("R3 EXT");
            System.out.println("P4");
            System.out.println("Employee Spaces (Weekdays, 7:30PM to 7 AM)");
            System.out.println("Employee Spaces (Weekends, 4:30PM Friday to 7 AM Monday)");
        } else if(permitInput.equals("East Resident")){
            System.out.println("R1");
            System.out.println("R2");
            System.out.println("R5");
            System.out.println("McMillan Rd. East");
            System.out.println("Employee Spaces (Weekdays, 7:30PM to 7 AM)");
            System.out.println("Employee Spaces (Weekends, 4:30PM Friday to 7 AM Monday)");
        } else if (permitInput.equals("Employee")){
            System.out.println("C Lots");
            System.out.println("Employee Spaces");
            System.out.println("Employee 24 Hour Spaces");
        }
        System.out.println("Visitor Spots (9 PM to 7 AM)");

        if (permitInput.equals("Park N Ride") || permitInput.equals("Carpool") || permitInput.equals("Disability Access")) {
        category = "Student";
        }

        System.out.println("You have a " + category + " permit.");
        System.out.println("You can park in these locations at all times:");

        if (permitInput.equals("Park N Ride")) {
            System.out.println("East (P5, P7, P8)");
            System.out.println("West (P6)");
            System.out.println("(Monday - Friday, 7 A.M. - 6 P.M.)");
            System.out.println("(Monday - Thursday, 7 A.M. - 6 P.M.)");
        }

        if (permitInput.equals("Carpool")) {
            System.out.println("Brooks Center");
            System.out.println("P&A building");
            System.out.println("Sirrine lot North and South");
            System.out.println("C -11");
            System.out.println("E-4");
            System.out.println("Newman Hall");
            System.out.println("Employee Spaces (Weekdays, 7:30PM to 7 AM)");
            System.out.println("Employee Spaces (Weekends, 4:30PM Friday to 7 AM Monday)");
        }
    }
}