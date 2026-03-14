import React from 'react';
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import UpVote from './upVote';

/**
 * skenario testing
 *
 * - UpVote component
 *   - should call up vote thread function when up vote thread button is clicked
 *   - should call up vote thread function when up vote thread button is clicked (when voted up)
 */

expect.extend(matchers);
describe('UpVote component', () => {

  afterEach(() => {
    cleanup();
  });

  const mockCommentId = 'comment-1';
  const mockUpVotesTotal = 2;

  it('should call up vote thread function when up vote thread button is clicked', async () => {
    // Arrange
    const mockUpVoteThread = vi.fn();
    const mockIsVoteUp = false;
    render(
      <UpVote onUpVote={mockUpVoteThread} commentId={mockCommentId} upVotesTotal={mockUpVotesTotal} isVoteUp={mockIsVoteUp}/>
    );
    const upVoteButton = await screen.getByRole('button');

    // Action
    await userEvent.click(upVoteButton);

    // Assert
    expect(mockUpVoteThread).toHaveBeenCalledTimes(1);
  });

  it('should call up vote thread function when up vote thread button is clicked (when voted up)', async () => {
    // Arrange
    const mockUpVoteThread = vi.fn();
    const mockIsVoteUp = true;
    render(
      <UpVote onUpVote={mockUpVoteThread} commentId={mockCommentId} upVotesTotal={mockUpVotesTotal} isVoteUp={mockIsVoteUp}/>
    );
    const upVoteButton = await screen.getByRole('button');

    // Action
    await userEvent.click(upVoteButton);

    // Assert
    expect(mockUpVoteThread).toHaveBeenCalledTimes(1);
  });
});