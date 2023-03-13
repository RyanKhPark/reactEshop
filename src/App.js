import Directory from './component/directory/directory.component'


const App = () => {

  const categories = [
    {
      id: 1,
      title: 'CSS Tricks',
      imageUrl: 'https://play-lh.googleusercontent.com/TxjQBGYHvMJsBX5dCvxQ4R-_4N-XrVhW6-p7D7TXanXKZMD8L-UkeMBWO1dtubGVNqU',
    },
    {
      id: 2,
      title: 'Java Script',
      imageUrl: 'https://static.javatpoint.com/images/javascript/javascript_logo.png',

    },
    {
      id: 3,
      title: 'React',
      imageUrl: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg',

    },
    {
      id: 4,
      title: 'Node JS',
      imageUrl: 'https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png',

    },
    {
      id: 5,
      title: 'Google Spread Sheet',
      imageUrl: 'https://images.unsplash.com/photo-1663124178632-488f399d5763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMDAzMzh8MHwxfHNlYXJjaHwxNXx8Z29vZ2xlJTIwc2hlZXRzfGVufDB8fHx8MTY2NjgzMjEzOA&ixlib=rb-4.0.3&q=80&w=1080',

    }
  ];

  return (
    <Directory categories={categories} />
  );
}

export default App;
