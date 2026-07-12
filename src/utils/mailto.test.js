import { describe, it, expect } from 'vitest';
import { buildMailto } from './mailto.js';

describe('buildMailto', () => {
  it('builds a mailto with subject and body', () => {
    expect(buildMailto({ to: 'a@b.com', subject: 'Hi', body: 'Hello there' }))
      .toBe('mailto:a@b.com?subject=Hi&body=Hello+there');
  });
  it('omits empty fields', () => {
    expect(buildMailto({ to: 'a@b.com', subject: '', body: '' })).toBe('mailto:a@b.com');
  });
  it('encodes special characters', () => {
    expect(buildMailto({ to: 'a@b.com', subject: 'Hello & goodbye' }))
      .toBe('mailto:a@b.com?subject=Hello+%26+goodbye');
  });
});
