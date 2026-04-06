## ADDED Requirements

### Requirement: Header section display
The system SHALL display a header with the person's name, external links (Zenn, Blog, Twitter, GitHub), experience years, and position list.

#### Scenario: Header renders all info
- **WHEN** the page loads
- **THEN** the header shows "東海林 昴 (Subaru Shoji)", all social links as clickable URLs, and positions (テックリード, アーキテクト, etc.)

### Requirement: Skills section display
The system SHALL display skills organized by category (frontend, mobile, backend, infrastructure, AI) with frameworks and years of experience.

#### Scenario: Skills are categorized
- **WHEN** the user views the skills section
- **THEN** skills are grouped by category with nested framework/library listings and experience duration

### Requirement: Values and strengths display
The system SHALL display the values (価値観) and strengths (強み) sections.

#### Scenario: Values section renders
- **WHEN** the user scrolls to the values section
- **THEN** core values and detailed values are displayed in a readable format

### Requirement: Career history display
The system SHALL display all career entries in reverse chronological order with period, overview, position, technologies, and description.

#### Scenario: Career entries are displayed
- **WHEN** the user views the career section
- **THEN** each project shows its period, title, position, tech stack, and key accomplishments

### Requirement: Interests and books display
The system SHALL display technical interests, recent technologies, and favorite books.

#### Scenario: Interests section renders
- **WHEN** the user views the interests section
- **THEN** recent technologies, areas of interest, and favorite technical books are listed

### Requirement: Single page layout
The system SHALL render all sections on a single scrollable page with clear visual separation between sections.

#### Scenario: All sections visible by scrolling
- **WHEN** the user scrolls through the page
- **THEN** all resume sections are visible in order: header → skills → values → strengths → career → interests → books
