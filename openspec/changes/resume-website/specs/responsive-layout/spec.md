## ADDED Requirements

### Requirement: Mobile-friendly layout
The system SHALL be readable and usable on mobile devices (viewport width 320px and above).

#### Scenario: Content readable on mobile
- **WHEN** the page is viewed on a 375px wide viewport
- **THEN** all text is readable without horizontal scrolling and sections stack vertically

### Requirement: Desktop layout optimization
The system SHALL use wider layouts on desktop viewports (768px+) to improve readability.

#### Scenario: Desktop uses wider content area
- **WHEN** the page is viewed on a 1280px wide viewport
- **THEN** content is centered with a max-width container and appropriate margins

### Requirement: Print-friendly styles
The system SHALL render cleanly when printed or saved as PDF from the browser.

#### Scenario: Page prints without artifacts
- **WHEN** the user prints the page (Ctrl+P)
- **THEN** the content prints without navigation artifacts, with appropriate page breaks
