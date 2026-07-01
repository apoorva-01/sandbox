import { test } from 'node:test';
import assert from 'node:assert';
import { slugify } from '../src/slugify.js';

test('slugify basics', () => {
  assert.equal(slugify('Hello World!'), 'hello-world');
  assert.equal(slugify('  Foo__Bar  '), 'foo-bar');
});
