## ADDED Requirements

### Requirement: Structured resume data
The system SHALL define resume data as a typed TypeScript object in `src/data/resume.ts` containing all sections from the original 職務経歴書.

#### Scenario: Data includes basic info
- **WHEN** the resume data is accessed
- **THEN** it contains name (東海林 昴), links (Zenn, Blog, Twitter, GitHub), years of experience, and positions held

#### Scenario: Data includes skills
- **WHEN** the skills section is accessed
- **THEN** it contains categorized skills (frontend, mobile, backend, infrastructure, AI tools) with language/framework names and years of experience

### Requirement: Career history data
The system SHALL include all career entries with period, overview, position, technologies, and description.

#### Scenario: Career entries are complete
- **WHEN** the career data is accessed
- **THEN** it contains all projects from the original resume (AI Agent development, API service, dispatch management, geofencing, educational content, real estate chat, department store app, VOD service, etc.)

### Requirement: Additional sections data
The system SHALL include values, strengths, growth areas, career direction, interests, and favorite books.

#### Scenario: Values and strengths are available
- **WHEN** the values section is accessed
- **THEN** it contains the values (simplicity, efficiency) and strengths (DDD/TDD/BDD introduction, refactoring expertise)
