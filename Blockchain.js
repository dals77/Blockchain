import Block from "./Block.js";

class Blockchain{
chain;

constructor(){
    this.chain = [this.init()];
    this.difficulty = 2;
    
}

init(){
   return new Block("0", "6/17/2022","G BLOCK", "");
  
}
LastBlock(){
    return this.chain[this.chain.length - 1];
}

addBlock(newBlock){
    newBlock.previousHash = this.LastBlock().hash;
   newBlock.mine(this.difficulty);
    this.chain.push(newBlock);
}
validateBlockchain(){
    for(let i = 1; i < this.chain.length; i++){
        let currentBlock = this.chain[i];
       let previosBlock = this.chain[i - 1];
        if(currentBlock.hash !== currentBlock.calculateHash() || currentBlock.previosHash !== previosBlock.hash){
            return false;
        }
    }
    return true;
}

}
let COIN = new Blockchain();
COIN.addBlock(new Block(1, "6/18/2022", "BLOCK 1"));
console.log(COIN);

console.log("Is Blockchain valid?" + COIN.validateBlockchain());
export default Blockchain;