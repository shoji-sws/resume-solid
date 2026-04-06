## ADDED Requirements

### Requirement: SolidJS project initialization
The system SHALL be a SolidJS application bootstrapped with the official Vite TypeScript template (`solid-js`, `vite`, `typescript`).

#### Scenario: Project builds successfully
- **WHEN** `npm run build` is executed
- **THEN** static HTML/CSS/JS files are generated in `dist/` directory without errors

#### Scenario: Development server starts
- **WHEN** `npm run dev` is executed
- **THEN** a local development server starts with hot module replacement

### Requirement: Tailwind CSS v4 integration
The system SHALL use Tailwind CSS v4 with `@tailwindcss/vite` plugin for styling.

#### Scenario: Tailwind classes are applied
- **WHEN** a component uses Tailwind utility classes
- **THEN** the corresponding styles are rendered correctly in the browser

### Requirement: TypeScript strict mode
The system SHALL use TypeScript in strict mode for type safety.

#### Scenario: Type errors are caught at build time
- **WHEN** code contains type errors
- **THEN** `npm run build` fails with descriptive type error messages
