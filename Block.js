import sha256 from 'crypto-js/sha256.js';


class Block{
constructor(height, timestamp, data, previousHash){
    this.height = height;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0; 
   

}

calculateHash(){
return  sha256(this.height + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce).toString();
}

mine(difficulty){
    let count = 0;
 while(this.hash.substring(0, difficulty) !== "".padStart (difficulty ,"0")){
        this.nonce++;
        count++;
        this.hash = this.calculateHash();
 }
 console.log("Block hashed at: " + count + " Hashes: " + this.hash);
}
}


export default Block;