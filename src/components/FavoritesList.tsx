import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface FavoritesListProps {
  favoriteTeams: string[];
  onRemove: (teamName: string) => void;
}

export const FavoritesList = ({ favoriteTeams, onRemove }: FavoritesListProps) => {
  if (favoriteTeams.length === 0) {
    return (
      <Card className="bg-card border-border p-6 text-center">
        <Icon name="Heart" size={48} className="mx-auto text-muted-foreground mb-4 opacity-30" />
        <p className="text-muted-foreground text-sm">
          Нажмите ❤️ рядом с командами, чтобы получать персональные уведомления об их матчах
        </p>
      </Card>
    );
  }

  return (
    <Card className="bg-card border-border p-4">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <Icon name="Heart" size={20} className="text-red-500 fill-red-500" />
        Избранные команды
      </h3>
      <div className="space-y-2">
        {favoriteTeams.map((team) => (
          <div
            key={team}
            className="flex items-center justify-between p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <Icon name="Trophy" size={18} className="text-primary" />
              <span className="font-medium">{team}</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => onRemove(team)}
            >
              <Icon name="X" size={16} className="text-destructive" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
};
