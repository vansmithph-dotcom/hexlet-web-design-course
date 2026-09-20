# Publishing model

## Source of truth
The repository remains private. GitHub stores course sources, lesson metadata, assets, validation rules, and build automation. Students do not need GitHub access.

## Build
GitHub Actions validates the course and builds static lesson output into `dist/`.

Pilot target:

```text
dist/P001/
└── index.html + Slidev assets
```

P001 is built for the stable production path:

```text
/course/pm1/P001/
```

The host/domain can change without changing the lesson package structure.

## Staging
Every build is validated and reviewed before production. The existing `Build course` workflow uploads `dist/` as the `course-build` artifact for inspection or deployment.

## Production
GitHub Pages is intentionally not used: the repository is private and the current GitHub plan does not enable Pages for this repository.

Production target is an external web host, initially the college infrastructure when access is available. Deployment credentials must be stored only in GitHub Secrets or a protected GitHub Environment.

Planned pipeline:

```text
private GitHub
  -> validate
  -> build Slidev
  -> verify output
  -> course-build artifact
  -> staging
  -> teacher approval
  -> external host /course/pm1/Pxxx/
  -> Moodle link or embed
```

Do not auto-publish unfinished lessons to production.

## Moodle
Moodle is the student-facing LMS for access, assignments, submissions, quizzes, grades, deadlines, and progress.

Content flow is one-way:

```text
GitHub -> web publication -> Moodle
```

Student submissions, attempts, grades, groups, and personal data must never be synchronized back into this repository.

Moodle API synchronization remains disabled until the live installation is audited. The first integration may use stable external lesson URLs; API-based synchronization is a later phase.

## Required server audit before enabling deployment
Confirm:
- production hostname and document root;
- HTTPS;
- SSH/SFTP or another supported deployment method;
- account/path permissions;
- whether `/course/pm1/` can be served as static files;
- iframe/embed policy for Moodle;
- cache headers and rollback method.

After the audit, add a protected deployment workflow with staging first and production approval second.
