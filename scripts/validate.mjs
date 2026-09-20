import { existsSync, readFileSync } from 'node:fs';

const required = [
  'course.yml',
  'COURSE_PLATFORM_SPEC.md',
  'lessons/P026/lesson.yml',
  'lessons/P026/slides.md',
  'lessons/P026/teacher.md',
  'lessons/P026/student.md',
  'lessons/P026/practice.md',
  'lessons/P026/quiz.yml'
];

let failed = false;
for (const file of required) {
  if (!existsSync(file)) {
    console.error('MISSING:', file);
    failed = true;
  }
}

if (!failed) {
  const slides = readFileSync('lessons/P026/slides.md', 'utf8');
  if (!slides.includes('lesson: P026')) {
    console.error('INVALID: P026 slides frontmatter has no lesson id');
    failed = true;
  }
}

if (failed) process.exit(1);
console.log('Course structure validation passed.');
