import { resume } from "./data/resume";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Values from "./components/Values";
import Career from "./components/Career";
import Interests from "./components/Interests";

export default function App() {
  return (
    <div class="min-h-screen bg-base-100">
      <Nav />
      <main class="max-w-3xl mx-auto px-4 py-8 md:py-12 space-y-8 md:space-y-10">
        <Header data={resume} />
        <Skills skills={resume.skills} />
        <Values
          values={resume.values}
          strengths={resume.strengths}
          growthAreas={resume.growthAreas}
          careerDirection={resume.careerDirection}
        />
        <Career career={resume.career} />
        <Interests
          recentTech={resume.recentTech}
          interests={resume.interests}
          books={resume.books}
        />

        <footer class="text-center text-sm text-base-content/60 py-8 no-print space-y-1">
          <p>
            Built with{" "}
            <a href="https://www.solidjs.com/" target="_blank" rel="noopener noreferrer" class="link link-hover link-primary">SolidJS</a> ·{" "}
            <a href="https://kobalte.dev/" target="_blank" rel="noopener noreferrer" class="link link-hover link-primary">Kobalte</a> ·{" "}
            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="link link-hover link-primary">Tailwind CSS</a> ·{" "}
            <a href="https://daisyui.com/" target="_blank" rel="noopener noreferrer" class="link link-hover link-primary">DaisyUI</a>
          </p>
          <p>
            Powered by{" "}
            <a href="https://github.com/Fission-AI/OpenSpec" target="_blank" rel="noopener noreferrer" class="link link-hover link-primary">OpenSpec</a> ·{" "}
            <a href="https://github.com/nextlevelbuilder/ui-ux-pro-max-skill" target="_blank" rel="noopener noreferrer" class="link link-hover link-primary">ui-ux-pro-max skill</a>
          </p>
        </footer>
      </main>
    </div>
  );
}
