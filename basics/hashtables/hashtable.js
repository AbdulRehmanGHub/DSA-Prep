// // We want to store a phone number in hash tables.

// // ali: 923234455
// // abdul: 9232357166
// // khan: 9299838388

// // To solve this problem we need to use "hash functions"

// // Hash Function: Acts like a translator, taking an input of any size(key) and converting it into a fixed-sized value (hash code) that can be used as index within the hash table's internal array. This process of mapping arbitary keys to fixed-length indices is called hashing.

class HashTable {
  constructor(size = 5) {
    this.keyMap = new Array(size);
  }

  _hashFunction(key) {
    let sum = 0;
    const PRIME_NUMBER = 31;

    // Use i to iterate over characters in key
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const charCode = key.charCodeAt(i) - 96;
      sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length;
    }

    return sum;
  }

  set(key, value) {
    const index = this._hashFunction(key);

    // Initialize the bucket if it doesn't exist
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    // Push the key/value pair to the bucket
    this.keyMap[index].push([key, value]);
    return this;
  }

  get(key) {
    const index = this._hashFunction(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  getAllKeys() {
    const keys = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keys.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keys;
  }

  getAllValues() {
    const values = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          values.push(this.keyMap[i][j][1]);
        }
      }
    }
    return values;
  }
}

const phoneBook = new HashTable();
// console.log(phoneBook);
phoneBook.set("ali", "928-838-883");
phoneBook.set("abdul", "200-100-100");
phoneBook.set("khan", "888-555-111");
// console.log(phoneBook.get("ali"));
// console.log(phoneBook.get("abdul"));
// console.log(phoneBook.getAllKeys());
console.log(phoneBook.getAllValues());
