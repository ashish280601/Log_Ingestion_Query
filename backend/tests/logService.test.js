const fs = require('fs/promises');
const { queryLogs } = require('../services/logService');

jest.mock('fs/promises');

const mockLogs = [
  {
    level: 'error',
    message: 'Database connection failed',
    resourceId: 'db-node',
    timestamp: '2025-07-15T10:00:00Z',
    traceId: 't-001',
    spanId: 's-001',
    commit: 'abc123',
    metadata: {}
  },
  {
    level: 'info',
    message: 'User logged in',
    resourceId: 'auth-service',
    timestamp: '2025-07-14T08:00:00Z',
    traceId: 't-002',
    spanId: 's-002',
    commit: 'def456',
    metadata: {}
  }
];

describe('Log Service - queryLogs()', () => {
  beforeEach(() => {
    fs.readFile.mockResolvedValue(JSON.stringify(mockLogs));
  });

  test('returns all logs when no filters are applied', async () => {
    const result = await queryLogs({});
    expect(result).toHaveLength(2);
  });

  test('filters by level', async () => {
    const result = await queryLogs({ level: 'info' });
    expect(result).toHaveLength(1);
    expect(result[0].level).toBe('info');
  });

  test('filters by message keyword (case-insensitive)', async () => {
    const result = await queryLogs({ message: 'database' });
    expect(result).toHaveLength(1);
    expect(result[0].message).toMatch(/database/i);
  });

  test('filters by timestamp range', async () => {
    const result = await queryLogs({
      timestamp_start: '2025-07-15T00:00:00Z',
      timestamp_end: '2025-07-15T23:59:59Z'
    });
    expect(result).toHaveLength(1);
    expect(result[0].timestamp).toBe('2025-07-15T10:00:00Z');
  });
});
