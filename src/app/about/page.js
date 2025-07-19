// src/app/about/page.js
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto p-4 bg-white text-gray-900">
        <h1 className="text-3xl font-bold mb-8">About Me</h1>

        {/* Profile Section */}
        <section className="flex flex-col md:flex-row gap-8 mb-12 items-center md:items-start">
          {/* Profile Image - Square with Light Border */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-64 h-64 overflow-hidden border border-gray-200 bg-white">
              <img
                src="/images/profile-pic-amit.png"
                alt="Athava Hiwase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Intro Text */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Who I Am</h2>
            <p className="mb-4">
              Hi! I'm <span className="font-bold">Athava Hiwase</span>, an experienced{" "}
              <span className="font-bold">QA Automation Engineer</span> dedicated to building 
              reliable and efficient software through rigorous testing and automation.
            </p>
            <p>
              I love solving complex problems and ensuring applications work flawlessly—so users 
              never have to worry about bugs!
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What I Do</h2>
          <p className="mb-4">
            I specialize in end-to-end quality assurance, combining manual and automated testing 
            to deliver robust solutions. My toolbox includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-bold">Automation:</span> Selenium, Playwright, and custom frameworks.</li>
            <li><span className="font-bold">API Testing:</span> Postman, REST Assured, and Swagger.</li>
            <li><span className="font-bold">Manual Testing:</span> Test case design, exploratory testing, and defect tracking.</li>
            <li><span className="font-bold">CI/CD:</span> Integrating tests with Jenkins/GitHub Actions.</li>
          </ul>
        </section>

        {/* NEW: What I'm Learning and Working On Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">What I'm Learning & Working On</h2>
          <p className="mb-4">
            I'm constantly expanding my skills and exploring new technologies in quality assurance:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-bold">Performance Testing:</span> Learning JMeter and LoadRunner for system performance evaluation</li>
            <li><span className="font-bold">AI in Testing:</span> Exploring AI-powered test automation tools</li>
            <li><span className="font-bold">Mobile Automation:</span> Working with Appium for cross-platform mobile testing</li>
            <li><span className="font-bold">CI/CD Pipelines:</span> Implementing automated testing in GitHub Actions workflows</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Let's Connect</h2>
          <p className="mb-4">
            Interested in collaborating or just want to chat about QA? Reach out!
          </p>
          <ul className="space-y-2">
            <li>📧 Email: <a href="mailto:atharva.hiwase07@gmail.com" className="text-gray-900 underline hover:text-gray-700">atharva.hiwase07@gmail.com</a></li>
            <li>💼 LinkedIn: <a href="https://www.linkedin.com/in/atharva-hiwase-92810014b/" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:text-gray-700">https://www.linkedin.com/in/atharva-hiwase</a></li>
            <li>🐙 GitHub: <a href="https://github.com/atharva07" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline hover:text-gray-700">github.com/atharva07</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}