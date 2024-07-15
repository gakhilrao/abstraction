import Upsc from "./Upsc";

class Ias extends Upsc{
    constructor(){
        super()
    }
    responsibilities(): void {
        console.log("Holds responsibilities of all departments of district");
    }
    minNoOfAge: number=21;
    maxNoOfAge: number=32;

    selectedcandidates = () => {
        console.log("Candidates gets transfered to different locations according to government");
    }
    

}

export default Ias;