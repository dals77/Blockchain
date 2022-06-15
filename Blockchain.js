import Block from "./Block";

class Blockchain{
chain;

constructor(){
    this.chain = [];
    this.init();
}
init(){
this.chain(new Block(Date.now(), "Dana", "", "0", "0"));
this.chain.push(Block);
console.log(this.chain);
}


}
export default Blockchain;