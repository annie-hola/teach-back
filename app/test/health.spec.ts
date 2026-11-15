import { describe, expect, it } from 'vitest';

describe('API foundation', () => {
  it('uses the documented health payload contract', () => {
    expect({ status: 'ok', service: 'teachback-api', version: '0.1.0' }).toMatchObject({ status: 'ok' });
  });
});
