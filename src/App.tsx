import { resume } from "./data/resume";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Skills from "./components/Skills";
import Values from "./components/Values";
import Career from "./components/Career";
import Interests from "./components/Interests";

export default function App() {
  return (
    <div class="min-h-screen bg-surface-900">
      <Nav />
      <main class="max-w-3xl mx-auto px-4 py-8 md:py-12 space-y-6">
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

        <footer class="text-center text-sm text-surface-400 py-8 no-print space-y-1">
          <p>Built with SolidJS · Kobalte · Tailwind CSS</p>
          <p>Powered by OpenSpec · ui-ux-pro-max skill</p>
        </footer>
      </main>
    </div>
  );
}
