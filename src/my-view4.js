import {LitElement, html, css, render} from 'lit-element';

import {bulmaStyles} from '@granite-elements/granite-lit-bulma/granite-lit-bulma.js';


class DictData extends LitElement {
  

    static get properties(){

        return {
    
          numbers: {type: Array},

        }
      }

  

  constructor() {
    super();
    this.numbers = []

  }

  dicSort() {
    const Dictionary = [{
      34: "thirty-four",
      90: "ninety",
      91: "ninety-one",
      21: "twenty-one",
      61: "sixty-one",
      9: "nine",
      2: "two",
      6: "six",
      3: "three",
      8: "eight",
      80: "eighty",
      81: "eighty-one",
      "Ninety-Nine": "99",
      "nine-hundred": "900",
    }];

    // objs.sort((a, b) =>
    //   a.last_nom > b.last_nom ? 1 : b.last_nom > a.last_nom ? -1 : 0
    // );

  const sortedDic =  Dictionary.sort((a,b) => (
        a.key > b.key ? 1 : b.key > a.key ? -1 : 0
    ))

    console.log('sorted', sortedDic)


for (const [key, value] of Object.entries(...sortedDic)) {
    console.log(`${key}: ${value}`);
  }

    this.numbers = [...sortedDic]


  }

  static get styles() {
    return [bulmaStyles];
  }

  async firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.dicSort()
   
  }


  render () {
    
    return html`
    <div class="card">
        <h2 class="title is-4">Ordered Data</h2>
        <div>
        ${JSON.stringify(...this.numbers)}
    </div>
        </div>
        
    
    
    `;
  }
}

window.customElements.define("my-view4", DictData);
