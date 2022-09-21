class stack {
    constructor(){
        this.stack = [];
    }
    push(elm){
        this.stack.push(elm);
        return this.stack; 
    }
    pop(){
        this.stack.pop();
        return this.stack;
    }
    peek(index=this.stack ){

    }
}
