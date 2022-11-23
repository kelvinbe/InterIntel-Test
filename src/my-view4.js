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

    console.log('sorted', sortedDic[0])


for (const [key, value] of Object.entries(...sortedDic)) {
    console.log((`${key}: ${value}`))
  }

    this.numbers = sortedDic[0]


  }

  static get styles() {
    return [bulmaStyles];
  }


  // static styles = css`
  // .completed {
  //   text-decoration-line: line-through;
  //   color: #777;
  // }`

  async firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.dicSort()
   
  }


  render () {

    
    
    return html`
    <div class="card">
        <div>
    <div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>The Following Data Was Ordered</strong> <small>Using</small> <small>Javascript</small>
          <br>
          ${JSON.stringify(this.numbers).replace(/[{}]/g, '')}
        </p>
      </div>
      <nav class="level is-mobile">
        <div class="level-left">
          <a class="level-item" aria-label="reply">
            <span class="icon is-small">
              <i class="fas fa-reply" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="retweet">
            <span class="icon is-small">
              <i class="fas fa-retweet" aria-hidden="true"></i>
            </span>
          </a>
          <a class="level-item" aria-label="like">
            <span class="icon is-small">
              <i class="fas fa-heart" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </nav>
    </div>
  </article>
    </div>
        </div>
    
    `;
  }
}

window.customElements.define("my-view4", DictData);
