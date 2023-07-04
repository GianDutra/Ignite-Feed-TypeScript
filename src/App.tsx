import { Header } from './components/Header';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

type Content = {
  type: 'paragraph' | 'link';
  content: string;
};

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/kevinsilvadev.png',
      name: 'Kevin Silva',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!' },
      { type: 'paragraph', content: 'Acabei de ver o portafólio do Gian Dutra, ficou incrível... parabéns!!!' },
      { type: 'link', content: 'meu-portfolio-giandutra.vercel.app' },
    ],
    publishedAt: new Date('2023-06-28 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Opa pessoal!' },
      { type: 'paragraph', content: 'Acabei de ver o vídeo publicado pelo Gian sobre o Vtuber Voice, gostei bastante....' },
      { type: 'link', content: 'www.youtube.com/watch?v=43CvhUgiKCs' },
    ],
    publishedAt: new Date('2023-06-25 20:00:00'),
  }
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content as Content[]}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}


