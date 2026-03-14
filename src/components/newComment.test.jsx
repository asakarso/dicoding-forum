import React from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import NewComment from './newComment';
import { MemoryRouter } from 'react-router-dom';

/**
 * skenario testing
 *
 * - NewComment component
 *   - should handle content typing correctly
 *   - should call add comment function when add comment button is clicked
 */

expect.extend(matchers);

describe('NewComment component', () => {
  afterEach(() => {
    cleanup();
  });

  const mockAuthUser = {
    id: 'users-1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  };

  it('should handle content typing correctly', async () => {
    // Arrange
    render(
      <MemoryRouter>
        <NewComment authUser={mockAuthUser} onAddComment={() => {}}/>
      </MemoryRouter>
    );
    const contentInput = await screen.getByPlaceholderText('Komentar Anda...');

    // Action
    await userEvent.type(contentInput, 'contenttest');

    // Assert
    expect(contentInput).toHaveValue('contenttest');
  });

  it('should call add comment function when add comment button is clicked', async () => {
    // Arrange
    const mockAddComment = vi.fn();
    render(
      <MemoryRouter>
        <NewComment authUser={mockAuthUser} onAddComment={mockAddComment}/>
      </MemoryRouter>
    );
    const contentInput = await screen.getByPlaceholderText('Komentar Anda...');
    await userEvent.type(contentInput, 'contenttest');
    const addCommentButton = await screen.getByRole('button', { name: 'Kirim' });

    // Action
    await userEvent.click(addCommentButton);

    // Assert
    expect(mockAddComment).toBeCalledWith('contenttest');
  });
});