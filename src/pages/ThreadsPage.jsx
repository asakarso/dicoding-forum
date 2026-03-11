import React, { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import { useNavigate } from 'react-router-dom';
import ThreadCard from '../components/threadCard';
import { HiPencilAlt } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPopulateUsersAndTalks } from '../states/shared/action';
import CategoryList from '../components/categoryList';

function ThreadsPage() {
  const navigate = useNavigate();

  const authUser = useSelector((state) => state.authUser);
  const threads = useSelector((state) => state.threads);
  const users = useSelector((state) => state.users);

  const categories = [...new Set(threads.map((thread) => thread.category))];

  const [category, setCategory] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndTalks());
  }, [dispatch, setCategory]);

  function onCategoryClick(categorySelected) {
    if (category===categorySelected) {
      setCategory(null);
    } else {
      setCategory(categorySelected);
    }
  }

  const filteredThreads = category
    ? threads.filter((thread) => thread.category === category)
    : threads;

  const threadList = filteredThreads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId),
    authUserId: authUser.id
  }));

  return (
    <>
      <Navbar/>
      <main className='px-16 py-10'>
        <CategoryList categories={categories} selectedCategory={category} onClick={onCategoryClick}/>
        <h1 className='text-3xl font-semibold mb-8 text-primary'>Lihat Diskusi Terbaru</h1>
        <div className='flex flex-col gap-6'>
          {
            threadList.map((thread, index) => (
              <ThreadCard
                key={index}
                authUser={authUser}
                threadId={thread.id}
                title={thread.title}
                category={thread.category}
                body={thread.body}
                ownerName={thread.owner.name}
                ownerAvatar={thread.owner.avatar}
                createdAt={thread.createdAt}
                votesUp={thread.upVotesBy}
                votesDown={thread.downVotesBy}
                totalComments={thread.totalComments}
              />
            ))
          }
        </div>
        {/* Button Tambah Thread */}
        <div onClick={() => navigate('/threads/new-thread')} className='cursor-pointer p-4 w-fit rounded-full bg-primary text-white text-4xl fixed right-16 bottom-16'>
          <HiPencilAlt/>
        </div>
      </main>
    </>
  );
}

export default ThreadsPage;