import { Provider } from 'react-redux';
import ThreadCard from '../components/threadCard';
import store from '../states';
import { BrowserRouter } from 'react-router-dom';
import '../styles/style.css'

const stories = {
  title: 'ThreadCard',
  component: ThreadCard,
  tags: ['autodocs'], 
  decorators: [
    (Story) => (
      <Provider store={store}>
        <BrowserRouter> 
          <Story />
        </BrowserRouter>
      </Provider>
    ),
  ],
}

export default stories;

const TemplateStory = (args) => <ThreadCard {...args} />;

const Default = TemplateStory.bind({});
Default.args = {
  authUser: {
    id: 'users-1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
  threadId: 'thread-1',
  title: 'Ini Adalah Thread Pertama',
  category: '',
  body: 'Ini adalah isi dari thread pertama',
  ownerName: 'John Doe',
  ownerAvatar: 'https://generated-image-url.jpg',
  createdAt: '2021-06-21T07:00:00.000Z',
  votesUp: [],
  votesDown: [],
  totalComments: 0,
}

const WithVoteUp = TemplateStory.bind({});
WithVoteUp.args = {
  authUser: {
    id: 'users-1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
  threadId: 'thread-1',
  title: 'Ini Adalah Thread Pertama',
  category: '',
  body: 'Ini adalah isi dari thread pertama',
  ownerName: 'John Doe',
  ownerAvatar: 'https://generated-image-url.jpg',
  createdAt: '2021-06-21T07:00:00.000Z',
  votesUp: ['users-1'],
  votesDown: [],
  totalComments: 0,
}

const WithVoteDown = TemplateStory.bind({});
WithVoteDown.args = {
  authUser: {
    id: 'users-1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://generated-image-url.jpg',
  },
  threadId: 'thread-1',
  title: 'Ini Adalah Thread Pertama',
  category: '',
  body: 'Ini adalah isi dari thread pertama',
  ownerName: 'John Doe',
  ownerAvatar: 'https://generated-image-url.jpg',
  createdAt: '2021-06-21T07:00:00.000Z',
  votesUp: [],
  votesDown: ['users-1'],
  totalComments: 0,
}

export { Default, WithVoteUp, WithVoteDown };