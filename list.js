class dlistnode{
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }

}
class dlist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  first(value) {

    const newNode = new dlistnode(value, this.head);
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }
  last(value) {
    const newNode = new dlistnode(value);
  
    if (this.tail) {
      this.tail.next = newNode;
    }
    newNode.previous = this.tail;
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  
    return this;
  }
  find(value) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  delete(value) {
    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
        if (currentNode.value === value) {
            deletedNode = currentNode;

            if (deletedNode === this.head) {
                this.head = deletedNode.next;

                if (this.head) {
                    this.head.previous = null;
                }

                if (deletedNode === this.tail) {
                    this.tail = null;
                }
            } else if (deletedNode === this.tail) {
                this.tail = deletedNode.previous;
                this.tail.next = null;
            } else {
                let previousNode = deletedNode.previous;
                let nextNode = deletedNode.next;
                previousNode.next = nextNode;
                nextNode.previous = previousNode;
            }
        }

        currentNode = currentNode.next;
    }
    return deletedNode;
}
replace(value, newvalue) {
    let deletedNode = null;
    let currentNode = this.head;
    while (currentNode) {
        if (currentNode.value === value) {
            let newNode = new TwoWayListNode(newvalue);
            deletedNode = currentNode;

            if (deletedNode === this.head) {
                this.head = newNode;

                if (deletedNode.next) {
                    newNode.next = deletedNode.next;
                    newNode.next.previous = newNode;
                }

                if (deletedNode === this.tail) {
                    this.tail = newNode;
                }
            } else if (deletedNode === this.tail) {
                this.tail = newNode;
                newNode.previous = deletedNode.previous;
                newNode.previous.next = newNode;
            } else {
                let previousNode = deletedNode.previous;
                let nextNode = deletedNode.next;
                previousNode.next = newNode;
                nextNode.previous = newNode;
                newNode.previous = previousNode;
                newNode.next = nextNode;

            }
        }

        currentNode = currentNode.next;
    }
}

count() {
    let i = 0;
    let currentNode = this.head;

    while (currentNode) {
        i++;
        currentNode = currentNode.next;
    }

    return i;
}
}