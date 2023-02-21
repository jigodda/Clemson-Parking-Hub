import java.util.Scanner;

class PermitType {
    public static void main(String[] args){
        permit();
    }

    public static void permit(){
        String category = "";
        System.out.println("What type of permit do you have?");
        Scanner myObj = new Scanner(System.in);
        String permitInput = myObj.nextLine();
        
        if(permitInput.equals("Commuter") || permitInput.equals("Apartment") || permitInput.equals("East Resident")|| permitInput.equals("West Resident")){
            category = "Student";
        }

        System.out.println("You have a " + category + " permit.");
        System.out.println("You can park in these locations at all times:");

        if(permitInput.equals("Commuter")){
            System.out.println("C Lots");

        } else if(permitInput.equals("Apartment")){
            System.out.println("Calhoun Courts");
            System.out.println("Thornhill");
            System.out.println("Lightsey");
            System.out.println("R4");
            System.out.println("R4 Ext");

        } else if(permitInput.equals("West Resident")){
            System.out.println("R3");
            System.out.println("R3 EXT");
            System.out.println("P4");

        } else if(permitInput.equals("East Resident")){
            System.out.println("R1");
            System.out.println("R2");
            System.out.println("R5");
            System.out.println("McMillan Rd. East");
        }
    }
}