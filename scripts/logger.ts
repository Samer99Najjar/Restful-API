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
        if(this.level ==="Debug"){
            console.debug(message);
        }
        else{
            console.log(message);
        }
    }

    error(message: string) {
        console.error(message);
    }

    warn(message: string) {
        console.warn(message);
    }

    info(message: string) {
        console.info(message);
    }


}