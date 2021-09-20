import { Button } from "./Button";

interface SideBarProps {
  selectedGenreId: number;
  genres: Array<{
    id: number;
    stringifiedId: string;
    name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
    title: string;
  }>;

  onClickButton: (id: number) => void;
}

export function SideBar(props: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.genres.map((genre) => (
          <Button
            key={genre.id}
            id={genre.stringifiedId}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.onClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
