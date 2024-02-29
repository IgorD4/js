class list{
    constructor(){
        this.length = 0
        this.items =[]
    }
    count(){
        return this.length
    }
    add(data) {
        this.items[this.length] = data;
        this.length++;
      }
    
      remove(data) {
        let index = this.items.indexOf(data);
        if (index <= -1) {
          return null;
        }
        this.items.splice(index, 1);
        this.length--;
      }
    
      change(data, newData) {
        let index = this.items.indexOf(data);
        if (index === -1) {
          return null;
        }
        this.items[index] = newData;
      }
    
      find(data) {
        let index = this.items.indexOf(data);
        if (index === -1) {
          return null;
        }
        return this.items[index];
      }
    
    }
