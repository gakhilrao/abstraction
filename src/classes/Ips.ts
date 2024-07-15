import Upsc from "./Upsc";

class ips extends Upsc{
    constructor(){
        super()
    }
    responsibilities(): void {
        console.log("Holds responsibilities of its department");
    }
    minNoOfAge: number=21;
    maxNoOfAge: number=32;


}

export default ips;