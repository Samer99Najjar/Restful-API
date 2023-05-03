export class Logger{
    // Using singelton design pattern in this instance 
    private static instance: Logger;

    private level: string;
    private constructor() {
        this.level="Debug";
    }

    static getInstance() {
        if (!Logger.instance) {
          Logger.instance = new Logger();
        }
        return Logger.instance;
      }
    
    public setLogLevel(level: string) {
        this.level = level;
    }     


    log(message:string){
       
        console.log(message);
        
    }


}