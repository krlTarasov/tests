import getColor from '../getColor';

test('getColor', () => {
  expect(getColor({ name: 'vasya', health: 30 })).toBe('wounded');
  expect(getColor({ name: 'vasya', health: 70 })).toBe('healthy');
  expect(getColor({ name: 'vasya', health: 9 })).toBe('critical');
});
