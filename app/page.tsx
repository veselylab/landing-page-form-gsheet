export default function Home() {
  return (
    <main style={{fontFamily:'sans-serif',padding:'40px',maxWidth:900,margin:'0 auto'}}>
      <section>
        <p>Eyebrow</p>
        <h1>Headline with clear value proposition</h1>
        <p>Explain what user gets quickly and why it matters.</p>
      </section>

      <section>
        <p>Eyebrow</p>
        <h2>Contact</h2>
        <form>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Phone" />
          <input placeholder="Company" />
          <textarea placeholder="Message" />
          <label>
            <input type="checkbox" /> GDPR consent
          </label>
          <button type="submit">Submit</button>
        </form>
      </section>

      <section>
        <p>Eyebrow</p>
        <h2>Social proof</h2>
        <p>★★★★★ Trusted by clients</p>
      </section>

      <section>
        <p>Eyebrow</p>
        <h2>FAQ</h2>
        <details>
          <summary>Question?</summary>
          <p>Answer.</p>
        </details>
      </section>
    </main>
  )
}
