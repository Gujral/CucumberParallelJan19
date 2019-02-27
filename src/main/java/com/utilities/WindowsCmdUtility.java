package com.utilities;

import java.io.IOException;
import java.io.OutputStream;

public class WindowsCmdUtility {


    public static void main(String args[]) throws InterruptedException{
    	WindowsCmdUtility testScript = new WindowsCmdUtility();
//    	
    	execDOSCmdForHub();
    	Thread.sleep(4000);
    	execDOSCmdForNode("5555");
    	Thread.sleep(4000);
    	execDOSCmdForNode("5556");
    	Thread.sleep(5000);
//    	execDOSCmdToEndJavaProcesses();
    }
    
    public static void execDOSCmdToEndJavaProcesses() {  
    	try {
    	    // Execute command
    	    String command = "cmd /c start taskkill /f /im java.exe";
    	    Process child = Runtime.getRuntime().exec(command);
    	    
    	    
    	    // Get output stream to write from it
    	    OutputStream out = child.getOutputStream();

    	    out.write("cd C:/ /r/n".getBytes());
    	    out.flush();
    	    out.write("dir /r/n".getBytes());
    	    out.close();
    	} catch (IOException e) {
    	}
    }
    
   public static void execDOSCmdForHub() {  
    	try {
    	    // Execute command
    	    String command = "cmd /c start java -jar \"e:\\A Selenium Thorough\\selenium-server\\selenium-server-standalone-3.141.59.jar\" -role hub";
    	    Process child = Runtime.getRuntime().exec(command);
    	    child.waitFor();
			
    	    
    	    // Get output stream to write from it
    	    OutputStream out = child.getOutputStream();

    	    out.write("cd C:/ /r/n".getBytes());
    	    out.flush();
    	    out.write("dir /r/n".getBytes());
    	    out.close();
    	} catch (IOException e) {
    	} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    }
   
   public static void execDOSCmdForNode(String nodePort) {  
   	try {
   	    // Execute command
   	    String command = "cmd /c start java -jar \"e:\\A Selenium Thorough\\selenium-server\\selenium-server-standalone-3.141.59.jar\" -role node -port "+nodePort+" -hub http://localhost:4444/grid/register";
   	    Process child = Runtime.getRuntime().exec(command);
   	    child.waitFor();
			
   	    
   	    // Get output stream to write from it
   	    OutputStream out = child.getOutputStream();

   	    out.write("cd C:/ /r/n".getBytes());
   	    out.flush();
   	    out.write("dir /r/n".getBytes());
   	    out.close();
   	} catch (IOException e) {
   	} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
   }
}
