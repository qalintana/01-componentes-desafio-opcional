import { GenreResponseProps } from '../App';
import { Button } from './Button';

import '../styles/sidebar.scss';

interface ISidebarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClick: (idGenre: number) => void;
}

export function SideBar({
  genres,
  handleClick,
  selectedGenreId,
}: ISidebarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClick(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
