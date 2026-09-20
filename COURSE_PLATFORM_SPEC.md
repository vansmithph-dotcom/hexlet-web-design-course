# Course Platform Specification

## Architecture
GitHub is the source of truth for course content, versions, assets, and assessment definitions.
Moodle is the LMS for students: enrolment, access, submissions, attempts, grades, and progress.

Content flow: GitHub -> Validate -> Build -> Staging -> Production -> Moodle.

## Lesson contract
Each lesson is stored in lessons/Pxxx/ and contains:
- lesson.yml
- slides.md
- teacher.md
- student.md
- practice.md
- quiz.yml
- assets/

## Publishing rules
- Browser presentation is the primary live format.
- PDF is an export/archive format.
- Moodle synchronization is disabled until the real Moodle installation is audited.
- Existing PPTX/DOCX materials are not deleted during migration.
- Student data never goes to GitHub.

## Migration order
P026 -> P026-P029 -> P037-P042 -> P001-P042 -> future lessons.

## Security
Secrets are never committed. Deployment credentials belong in GitHub Secrets/Environments.
