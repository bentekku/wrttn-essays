const AboutPage = () => {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      {/* Decorative header */}
      <div className="flex items-center justify-center mb-12">
        <div className="h-px w-16 bg-linear-to-r from-transparent to-neutral-300"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 mx-3"></div>
        <div className="h-px w-16 bg-linear-to-l from-transparent to-neutral-300"></div>
      </div>

      <div className="text-center mb-16">
        <h1 className="text-neutral-900 mb-4">
          About: The Exploration Continues
        </h1>
        <p className="text-neutral-600 italic">
          A journey to think, write, and understand the world
        </p>
      </div>

      <div className="space-y-8 text-neutral-800 leading-relaxed">
        <p>
          Hello, I&apos;m <span className="italic">Shadab Khan</span>. This
          space is a personal laboratory—a collection of crude, imperfect, and
          sometimes grammatically unconventional essays that mark my beginning
          as a writer. I&apos;m new to this practice, and this blog serves as my
          primary tool for{" "}
          <span className="font-bold">exploration and self-discovery</span>.
        </p>

        <p>
          Every piece here is an attempt to articulate complex thoughts,
          understand the world, and clarify my own perspective. By committing
          these reflections to paper (or screen), I&apos;m actively{" "}
          <span className="font-bold">brushing up my writing skills</span>,
          improving my ability to express nuanced arguments, and building the
          necessary discipline for effective communication.
        </p>

        <p>
          Crucially, this practice is a dedicated part of my{" "}
          <span className="font-bold">UPSC CSE Mains preparation</span>. The
          demanding essay paper requires structured thinking, strong
          argumentation, and eloquence. These essays are my rigorous practice
          ground, aiming to transform raw ideas into well-expressed arguments
          that will help me achieve great marks in the examination.
        </p>

        <div className="pt-8 mt-12 border-t border-neutral-200">
          <h2 className="text-neutral-900 mb-6">What I&apos;m Exploring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-neutral-900 mb-2">Self-Reflection</h3>
              <p className="text-neutral-600">
                Using writing as a mirror to understand personal values,
                motivations, and growth.
              </p>
            </div>
            <div>
              <h3 className="text-neutral-900 mb-2">
                Analytical Rigor (UPSC Prep)
              </h3>
              <p className="text-neutral-600">
                Applying structured thought to current affairs, social issues,
                and philosophical themes.
              </p>
            </div>
            <div>
              <h3 className="text-neutral-900 mb-2">Clarity & Expression</h3>
              <p className="text-neutral-600">
                Developing the craft of writing—from grammar and vocabulary to
                creating flow and impact.
              </p>
            </div>
            <div>
              <h3 className="text-neutral-900 mb-2">Holistic Understanding</h3>
              <p className="text-neutral-600">
                Attempting to connect diverse subjects, essential for essay
                writing in competitive exams.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-neutral-200">
          <h2 className="text-neutral-900 mb-4">Connect on the Journey</h2>
          <p className="text-neutral-600 mb-4">
            I&apos;m learning as I go, and feedback is welcome. If an essay
            sparks a thought or you have advice on improving my writing style
            (especially for competitive exams), please feel free to reach out.
          </p>
          <a
            href="mailto:hello@shadabkhan.com"
            className="inline-block text-neutral-900 hover:text-neutral-600 transition-colors underline underline-offset-4"
          >
            mdshadab21july@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
