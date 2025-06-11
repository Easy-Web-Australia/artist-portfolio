import SEOHead from '../components/SEOHead'

export default function Contact() {
  return (
    <>
      <SEOHead title="Contact" />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <form name="contact" method="POST" data-netlify="true" className="max-w-md">
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-4">
            <label className="block">Name</label>
            <input type="text" name="name" required className="w-full border p-2" />
          </div>
          <div className="mb-4">
            <label className="block">Email</label>
            <input type="email" name="email" required className="w-full border p-2" />
          </div>
          <div className="mb-4">
            <label className="block">Message</label>
            <textarea name="message" required className="w-full border p-2" />
          </div>
          <button type="submit" className="px-4 py-2 bg-black text-white">Send</button>
        </form>
      </main>
    </>
  )
}
