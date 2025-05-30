import { forwardRef } from "react"
import { Mail, Github, Linkedin } from "lucide-react"

const ContactSection = forwardRef((props, ref) => {
  return (
    <section id="contact" ref={ref} className="min-h-screen py-20 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
          Let&apos;s Collaborate
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          I&apos;m always interested in new research opportunities and collaborative projects. Whether you have a
          biological question or computational challenge, let&apos;s discuss how we can work together!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:john@example.com"
            className="group flex flex-col items-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:-translate-y-2"
          >
            <Mail className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Email</h3>
            <p className="text-gray-600">john@example.com</p>
          </a>

          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:-translate-y-2"
          >
            <Github className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">GitHub</h3>
            <p className="text-gray-600">@johndoe</p>
          </a>

          <a
            href="https://linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:transform hover:-translate-y-2"
          >
            <Linkedin className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800">LinkedIn</h3>
            <p className="text-gray-600">John Doe</p>
          </a>
        </div>

        <form className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-800 placeholder-gray-500"
                aria-label="Your Name"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-800 placeholder-gray-500"
                aria-label="Your Email"
              />
            </div>
            <textarea
              rows={5}
              name="message"
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-white/80 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-800 placeholder-gray-500 resize-none"
              aria-label="Your Message"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  )
})

ContactSection.displayName = "ContactSection"
export default ContactSection
