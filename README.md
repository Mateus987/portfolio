<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mateus dos Santos | Software Engineer</title>

<style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Arial", sans-serif;
    }

    body {
    background: #0f172a;
    color: #e2e8f0;
    line-height: 1.6;
    }

    /* HERO */
    .hero {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    padding: 20px;
    }

    .hero h1 {
    font-size: 3rem;
    }

    .hero h2 {
    font-size: 1.3rem;
    margin-top: 10px;
    color: #38bdf8;
    }

    .stack {
    margin-top: 10px;
    color: #94a3b8;
    }

    .btn {
    margin-top: 20px;
    padding: 12px 22px;
    background: #38bdf8;
    color: #0f172a;
    text-decoration: none;
    border-radius: 8px;
    font-weight: bold;
    display: inline-block;
    transition: 0.3s;
    }

    .btn:hover {
    background: #0ea5e9;
    }

    /* ABOUT */
    .about {
    padding: 80px 20px;
    }

    .container {
    display: flex;
    max-width: 1000px;
    margin: auto;
    gap: 40px;
    align-items: center;
    }

    .profile {
    width: 200px;
    border-radius: 10px;
    }

    .text h2 {
    color: #38bdf8;
    margin-bottom: 15px;
    }

    /* SKILLS */
    .skills {
    padding: 80px 20px;
    text-align: center;
    }

    .skills h2 {
    color: #38bdf8;
    margin-bottom: 40px;
    }

    .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    max-width: 1000px;
    margin: auto;
    }

    .skill-card {
    background: #1e293b;
    padding: 20px;
    border-radius: 10px;
    transition: 0.3s;
    }

    .skill-card:hover {
    transform: translateY(-5px);
    }

    /* CONTACT */
    .contact {
    padding: 60px 20px;
    text-align: center;
    background: #0b1220;
    }

    .contact h2 {
    color: #38bdf8;
    margin-bottom: 20px;
    }

    .links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
    }

    .links a {
    color: #94a3b8;
    text-decoration: none;
    }

    .links a:hover {
    color: #38bdf8;
    }

    .copy {
    font-size: 0.8rem;
    color: #64748b;
    }

    /* RESPONSIVO */
    @media (max-width: 768px) {
    .container {
        flex-direction: column;
        text-align: center;
    }

    .hero h1 {
        font-size: 2.2rem;
    }
    }
</style>
</head>

<body>

  <!-- HERO -->
  <header class="hero">
    <div class="hero-content">
      <h1>Mateus dos Santos</h1>
      <h2>Software Engineer | Backend & System Integration</h2>

      <p class="stack">
        APIs • Python • Laravel • JavaScript • Docker
      </p>

      <a href="CV Mateus dos Santos.pdf" download class="btn">
        Download CV
      </a>
    </div>
  </header>

  <!-- SOBRE -->
  <section class="about">
    <div class="container">

      <img src="img/Matias.jpeg" alt="Mateus" class="profile"/>

      <div class="text">
        <h2>Sobre mim</h2>

        <p>
          Sou desenvolvedor de software com foco em backend, APIs e integração de sistemas.
          Atualmente curso Ciência da Computação na UNIVEM.
        </p>

        <p>
          Tenho experiência com desenvolvimento web, automação e construção de APIs utilizando
          Python, Laravel e JavaScript.
        </p>

        <p>
          Desde 2020 estudo programação e venho evoluindo principalmente em backend e arquitetura de sistemas.
          Busco oportunidades para atuar em ambientes desafiadores como engenheiro de software.
        </p>
      </div>

    </div>
  </section>

  <!-- SKILLS -->
  <section class="skills">
    <h2>Skills</h2>

    <div class="skills-grid">

      <div class="skill-card">
        <h3>Backend</h3>
        <p>Python • Laravel • APIs REST</p>
      </div>

      <div class="skill-card">
        <h3>Frontend</h3>
        <p>JavaScript • React • UI Integration</p>
      </div>

      <div class="skill-card">
        <h3>Database</h3>
        <p>SQL • PostgreSQL • Modelagem</p>
      </div>

      <div class="skill-card">
        <h3>DevOps</h3>
        <p>Docker • Deploy • Cloud Basics</p>
      </div>

    </div>
  </section>

  <!-- CONTATO -->
  <footer class="contact">
    <h2>Contato</h2>

    <div class="links">

      <a href="https://www.linkedin.com/in/mateus-dos-santos-de-andrade/" target="_blank">
        LinkedIn
      </a>

      <a href="https://github.com/Mateus987" target="_blank">
        GitHub
      </a>

      <a href="mailto:seuemail@email.com">
        Email
      </a>

    </div>

    <p class="copy">© 2026 Mateus dos Santos</p>
  </footer>

</body>
</html>
