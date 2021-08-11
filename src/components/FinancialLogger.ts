// typescript basic with netninja
//https://www.youtube.com/watch?v=iTZ1-85I77c&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=3

import "@/scss/components/FinancialLogger.scss";


export const financial_logger = () => {

  interface HasFormatter {
    format(): string;
  }

  class Invoice implements HasFormatter {

    constructor(
      readonly client: string,
      private details: string,
      public amount: number,
    ) { }

    format() {
      return `${this.client} owes $${this.amount} for ${this.details}`;
    }
  }

  class ListTemplate {
    constructor(private container: HTMLUListElement) { }

    render(item: HasFormatter, heading: string, pos: 'start' | 'end') {
      const li = document.createElement('li');

      const h4 = document.createElement('h4');
      h4.innerText = heading;
      li.append(h4);

      const p = document.createElement('p');
      p.innerText = item.format();
      li.append(p);

      if (pos === 'start') {
        this.container.prepend(li);
      } else {
        this.container.append(li);
      }
    }
  }

  class Payment implements HasFormatter {

    constructor(
      readonly recipient: string,
      private details: string,
      public amount: number,
    ) { }

    format() {
      return `${this.recipient} is owed $${this.amount} for ${this.details}`;
    }
  }

  const insert_html = `
  <section class="financial-logger">
      <!-- financial-logger -->
      <div class="wrapper">
        <h1>Finance Logger</h1>
  
        <!-- output list -->
        <ul class="item-list"></ul>
      </div>
  
      <footer>
        <form class="new-item-form">
          <div class="field">
            <label>Type:</label>
            <select id="type">
              <option value="invoice">Invoice</option>
              <option value="payment">Payment</option>
            </select>
          </div>
          <div class="field">
            <label>To / From:</label>
            <input type="text" id="tofrom" />
          </div>
          <div class="field">
            <label>Details:</label>
            <input type="text" id="details" />
          </div>
          <div class="field">
            <label>Amount (£):</label>
            <input type="number" id="amount" />
          </div>
          <button>Add</button>
        </form>
      </footer>
    </section>
  `;

  // select body; insert html
  const main = document.querySelector("#js-playground") as HTMLElement;
  main.insertAdjacentHTML("beforeend", insert_html);

  // select form
  const form = document.querySelector(".financial-logger form.new-item-form") as HTMLFormElement;

  // select inputs
  const type = form.querySelector('#type') as HTMLSelectElement;
  const tofrom = form.querySelector('#tofrom') as HTMLInputElement;
  const details = form.querySelector('#details') as HTMLInputElement;
  const amount = form.querySelector('#amount') as HTMLInputElement;

  // select UL
  const ul = <HTMLUListElement>document.querySelector('.financial-logger ul.item-list');

  // create template
  const list = new ListTemplate(ul);

  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    // tuples example
    const values: [string, string, number] = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;

    if (type.value == "invoice") {
      doc = new Invoice(...values);
    } else {
      doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
  })
}
