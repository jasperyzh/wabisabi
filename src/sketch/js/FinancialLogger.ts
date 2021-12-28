// typescript basic with netninja
//https://www.youtube.com/watch?v=iTZ1-85I77c&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=3


export const financial_logger = (): void => {

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
    <style>

    .financial-logger .wrapper {
      max-width: 960px;
      margin: 0 auto;
  }
  .financial-logger h1 {
      margin: 40px auto;
      color: #ff0aa7;
      text-align: center;
  }
  .financial-logger ul {
      padding: 0;
      list-style-type: none;
  }
  .financial-logger li {
      padding: 6px 10px;
      border: 1px solid #eee;
      margin: 10px auto;
  }
  .financial-logger li h4 {
      color: #ff0aa7;
      margin: 0;
      text-transform: capitalize;
  }
  .financial-logger li p {
      color: #333;
      margin: 8px 0 0;
  }
  .financial-logger footer {
      background: #eee;
      padding: 60px;
      margin-top: 60px;
  }
  .financial-logger form {
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
  }
  .financial-logger label {
      display: block;
      font-weight: bold;
      font-size: 0.8em;
      color: #333;
      margin: 16px 0 6px;
  }
  .financial-logger input,
  .financial-logger select {
      padding: 6px;
      border: 1px solid #e1e1e1;
      border-radius: 4px;
  }
  .financial-logger .field {
      display: inline-block;
      margin: 0 10px;
  }
  .financial-logger button {
      color: white;
      border: 0;
      background: #ff0aa7;
      padding: 6px;
      min-width: 80px;
      border-radius: 4px;
  }
  .financial-logger footer a {
      text-align: center;
      display: block;
      color: #999;
      margin-top: 40px;
      font-size: 0.7em;
  }
    </style>
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
