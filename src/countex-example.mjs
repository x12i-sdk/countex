import assert from 'node:assert/strict';
import { createCountex } from '@x12i/countex';
import { createMemoryStorage } from '@x12i/countex/adapters/memory';
const map = { counterId: 'fixture-activity', scope: { path: '$.tenant' }, eventTime: { path: '$.at' },
  subjects: [{ type: 'user', path: '$.user', required: true }], metrics: [{ path: '$.action', required: true }],
  dimensions: [{ name: 'app', path: '$.app' }], timeframes: ['day', 'all'], delta: { default: 1 },
};
const counters = createCountex({ maps: [map], ...createMemoryStorage() });
await counters.init();
try {
  await counters.ingestBatch([1, 2].map(index => ({ tenant: 'fixture', user: 'user-1', action: 'opened', app: 'example', at: '2026-01-01T00:00:00Z', id: index })));
  await counters.flush();
  const result = await counters.query({ scope: 'fixture', counterId: map.counterId, timeframe: { type: 'all' }, subject: { type: 'user', ids: ['user-1'] }, metrics: ['opened'], format: 'table' });
  assert.equal(result.rows[0].count, 2);
  console.log(result);
} finally { await counters.shutdown(); }
