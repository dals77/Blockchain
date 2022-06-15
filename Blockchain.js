class Blockchain{
    timestamp;
    data;
    hash;
    previousHash;
    height;
    nonce;

constructor(timestamp, data, hash, previousHash, height, nonce){
    this.timestamp = timestamp;
    this.data = data;
    this.hash = hash;
    this.previousHash = previousHash;
    this.height = height;
    nonce = 0; 
}


}
