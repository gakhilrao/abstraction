abstract class Upsc{


        abstract minNoOfAge:number;
        abstract maxNoOfAge:number;
        abstract responsibilities():void;

        selectedcandidates =()=>{
            console.log("Works for the government");

        }
    constructor(){
        console.log("Inside Upsc constructor");
    }
}

export default Upsc;