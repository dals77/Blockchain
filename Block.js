import { SHA256 } from "crypto-js";
class Block{

    timestamp;
    data;
    hash;
    previousHash;
    height;
    nonce;

constructor(timestamp, data, previousHash, height, nonce){
    this.timestamp = timestamp;
    this.data = data;
    this.hash = this.calculateHash();
    this.previousHash = previousHash;
    this.height = height;
    nonce = 0; 
}
calculateHash(){
return SHA256(this.timestamp + this.data + this.previousHash + this.height).toString();
}

}
export default Block;