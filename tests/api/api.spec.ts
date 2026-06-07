import { test, expect } from '@playwright/test';

test('GET users from JSONPlaceholder', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/users');
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(200);

  const users = await response.json();
  expect(Array.isArray(users)).toBeTruthy();
  expect(users.length).toBeGreaterThan(0);
  console.log(users);
});

test.only('POST a post to JSONPlaceholder', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'teste',
      body: 'teste teste',
      userId: 1,
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });

  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(201);

  const post = await response.json();
  expect(post).toHaveProperty('id');
  expect(post.title).toBe('teste');
  console.log(post);
});