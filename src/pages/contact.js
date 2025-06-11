import SEOHead from '../components/SEOHead'

export default function Contact() {
  return (
    <>
      <SEOHead title="Contact" />
      <div className="max-w-xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact</h1>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="space-y-6"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full border border-gray-300 rounded p-3"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded p-3"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="w-full border border-gray-300 rounded p-3"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  )
}
