// src/app/about/page.js
export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Who I Am</h2>
        <p className="text-lg">
          Hi! I'm Athava Hiwase, a QA Automation Engineer passionate about testing and automation. 
          Welcome to my portfolio!
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Manual Testing</li>
          <li>Automation (Selenium, Playwright)</li>
          <li>API Testing (Postman, REST Assured)</li>
        </ul>
      </section>
    </main>
  );
}