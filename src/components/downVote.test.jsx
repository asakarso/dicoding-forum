import React from 'react';
import matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import DownVote from './downVote';
import userEvent from '@testing-library/user-event';

/**
 * skenario testing
 *
 * - DownVote component
 *   - should call down vote thread function when down vote thread button is clicked
 *   - should call down vote thread function when down vote thread button is clicked (when down voted)
 */

expect.extend(matchers);
describe('DownVote component', () => {

  afterEach(() => {
    cleanup();
  });

  const mockCommentId = 'comment-1';
  const mockDownVotesTotal = 2;

  it('should call down vote thread function when down vote thread button is clicked', async () => {
    // Arrange
    const mockDownVoteThread = vi.fn();
    const mockIsVoteDown = false;
    render(
      <DownVote onDownVote={mockDownVoteThread} commentId={mockCommentId} downVotesTotal={mockDownVotesTotal} isVoteDown={mockIsVoteDown}/>
    );
    const downVoteButton = await screen.getByRole('button');

    // Action
    await userEvent.click(downVoteButton);

    // Assert
    expect(mockDownVoteThread).toHaveBeenCalledTimes(1);
  });

  it('should call down vote thread function when down vote thread button is clicked (when down voted)', async () => {
    // Arrange
    const mockDownVoteThread = vi.fn();
    const mockIsVoteDown = true;
    render(
      <DownVote onDownVote={mockDownVoteThread} commentId={mockCommentId} downVotesTotal={mockDownVotesTotal} isVoteDown={mockIsVoteDown}/>
    );
    const downVoteButton = await screen.getByRole('button');

    // Action
    await userEvent.click(downVoteButton);

    // Assert
    expect(mockDownVoteThread).toHaveBeenCalledTimes(1);
  });
});