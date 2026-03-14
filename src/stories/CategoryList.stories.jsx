import { Provider } from 'react-redux';
import store from '../states';
import { BrowserRouter } from 'react-router-dom';
import '../styles/style.css'
import CategoryList from '../components/categoryList';

const stories = {
  title: 'CategoryList',
  component: CategoryList,
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

const TemplateStory = (args) => <CategoryList {...args} />;

const Default = TemplateStory.bind({});
Default.args = {
  categories: ['React', 'React Reduc', 'Test'], 
  selectedCategory: null, 
  onClick: (categorySelected) => {
    if (category===categorySelected) {
      setCategory(null);
    } else {
      setCategory(categorySelected);
    }
  }
}
const WithCategorySelected = TemplateStory.bind({});
WithCategorySelected.args = {
  categories: ['React', 'React Reduc', 'Test'], 
  selectedCategory: 'React', 
  onClick: (categorySelected) => {
    if (category===categorySelected) {
      setCategory(null);
    } else {
      setCategory(categorySelected);
    }
  }
}

export { Default, WithCategorySelected };