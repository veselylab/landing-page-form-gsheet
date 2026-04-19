export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section>
        <p>Pro koho je to</p>
        <h1>Získej více leadů z jedné jednoduché landing page</h1>
        <p>Minimalistická stránka, která konvertuje a sbírá kontakty bez tření.</p>
      </section>

      {/* FORM */}
      <section>
        <p>Začni</p>
        <h2>Nech nám kontakt</h2>
        <form>
          <input placeholder="Jméno" />
          <input placeholder="Email" />
          <input placeholder="Telefon" />
          <input placeholder="Firma" />
          <textarea placeholder="Zpráva" />
          <label><input type="checkbox" /> Souhlas se zpracováním</label>
          <button type="submit">Odeslat</button>
        </form>
      </section>

      {/* SOCIAL PROOF */}
      <section>
        <p>Důvěra</p>
        <h2>Ověřeno klienty</h2>
        <p>★★★★★ + reálné reference</p>
      </section>

      {/* BENEFITS */}
      <section>
        <p>Výhody</p>
        <h2>Proč to funguje</h2>
        <ul>
          <li>Rychlé načtení</li>
          <li>Jasná struktura</li>
          <li>Silná výzva k akci</li>
        </ul>
      </section>

      {/* FEATURES */}
      <section>
        <p>Funkce</p>
        <h2>Co přesně dostaneš</h2>
        <ul>
          <li>Landing page template</li>
          <li>Kontaktní formulář</li>
          <li>Připravené sekce</li>
        </ul>
      </section>

      {/* CTA */}
      <section>
        <p>Akce</p>
        <h2>Začni hned</h2>
        <button>Získat kontakt</button>
      </section>

      {/* FAQ */}
      <section>
        <p>Otázky</p>
        <h2>Časté dotazy</h2>
        <details>
          <summary>Jak rychle to nasadím?</summary>
          <p>Během pár minut.</p>
        </details>
        <details>
          <summary>Je to vhodné pro jakýkoliv projekt?</summary>
          <p>Ano.</p>
        </details>
      </section>

      {/* FOOTER */}
      <section>
        <p>Footer</p>
        <p>© Brand</p>
      </section>
    </main>
  )
}
