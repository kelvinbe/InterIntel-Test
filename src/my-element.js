/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import "./shared-styles.js";
import { LitElement, html, css, render } from "lit-element";
import { bulmaStyles } from "@granite-elements/granite-lit-bulma/granite-lit-bulma.js";

class MyElement extends LitElement {
  static get properties() {
    return {
      plans: { type: Array },
    };
  }

  constructor() {
    super();

    this.plans = [
      { name: "Starter", price: "20/month", NoTodos: 10, image: "https://cdn.dribbble.com/users/6569/screenshots/16482169/media/de475cb79969a810d45ba9b5d8cbf4a5.png?compress=1&resize=400x300&vertical=top"  },
      { name: "Dive", price: "40/month", NoTodos: 30, image: "https://img.freepik.com/free-vector/scuba-diver-cartoon-sticker_1308-79208.jpg?w=2000" },
      { name: "Turbo", price: "60/month", NoTodos: 50, image: "https://cdn.hswstatic.com/gif/turbo-update.jpg" },
      { name: "Full Turbo", price: "1000/month", NoTodos: 150, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAbG53p_5vUPSxTW8WkqfprLZZWmI9yFTqXw&usqp=CAU" },
    ];
  }

  static get styles() {
    return [bulmaStyles];
  }

  render() {
    return html`
      <div class="card">
        ${this.plans.map(
          (plan) => html` <div class="card">
            <div class="columns is-centered">
              <div class="column is-half">
                <!-- Your card code: -->
                <div class="card">
                  <div class="card-image">
                    <figure class="image is-4by3">
                      <img
                        src=${plan.image}
                        alt="Placeholder image"
                      />
                    </figure>
                  </div>
                  <div class="card-content">
                    <div class="content">
                      ${plan.name}
                      <br />

                      ${plan.price}
                      <br />

                      ${plan.NoTodos}
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`
        )}
      </div>
    `;
  }
}

window.customElements.define("my-element", MyElement);
