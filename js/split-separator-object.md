```javascript
/**
 * An object with a Symbol.split method can be used as a splitter with custom behavior.
 * 
 */

class CustomSplitter {
  constructor(value) {
    this.value = value;
  }

  [Symbol.split](string) {
    let result = string.replace(new RegExp(this.value, 'g'), `/${this.value}/`);

    if (result[0] === '/') result = result.substr(1);

    if (!result.startsWith(this.value)) result = `${this.value}/${result}`;

    return result;
  }
}
