import java.util.Scanner;

import javax.security.auth.x500.X500Principal;

class PermitType {
    public static void main(String[] args){
        permit();
    }

    public static void permit(){
        String category = "";
        System.out.println("What type of permit do you have?");
        Scanner myObj = new Scanner(System.in);
        String permitInput = myObj.nextLine();
        
        if(permitInput.equalsIgnoreCase("None")){
            category = "Visitor";
        }
        else if(permitInput.equalsIgnoreCase("visitor") || permitInput.equalsIgnoreCase("visitor permit")) {
            category = "Visitor";
        }
        else {
            System.out.println("Invalid permit. Please enter a valid permit.");
            System.exit(0);
        }

        System.out.println("You have no permit.");
        System.out.println("You can park in these locations between the hours of 9 P.M. to 7 A.M.:\n\nvi *list of locations*\n");
        System.out.println("If you would like to park during the day on campus, you can always find metered parking at these locations: ");

        

    }
}