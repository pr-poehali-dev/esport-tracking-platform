import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('live');

  const liveTournaments = [
    {
      id: 1,
      game: 'CS2',
      tournament: 'IEM Katowice 2025',
      match: 'Natus Vincere vs FaZe Clan',
      score: '13 - 11',
      map: 'de_ancient',
      time: '2:35:12',
      status: 'live',
      viewers: '145K'
    },
    {
      id: 2,
      game: 'Dota 2',
      tournament: 'The International 2025',
      match: 'Team Spirit vs OG',
      score: '1 - 1',
      map: 'BO3',
      time: '1:12:45',
      status: 'live',
      viewers: '328K'
    },
    {
      id: 3,
      game: 'Valorant',
      tournament: 'VCT Masters',
      match: 'Fnatic vs Paper Rex',
      score: '9 - 7',
      map: 'Haven',
      time: '0:45:20',
      status: 'live',
      viewers: '89K'
    }
  ];

  const topTeams = [
    { rank: 1, name: 'Natus Vincere', game: 'CS2', rating: 1000, change: '+12', logo: '🇺🇦' },
    { rank: 2, name: 'FaZe Clan', game: 'CS2', rating: 987, change: '+5', logo: '🌐' },
    { rank: 3, name: 'Team Spirit', game: 'Dota 2', rating: 965, change: '-3', logo: '🇷🇺' },
    { rank: 4, name: 'Fnatic', game: 'Valorant', rating: 942, change: '+8', logo: '🇬🇧' },
    { rank: 5, name: 'OG', game: 'Dota 2', rating: 928, change: '+15', logo: '🇪🇺' }
  ];

  const upcomingMatches = [
    {
      id: 1,
      game: 'CS2',
      team1: 'G2 Esports',
      team2: 'Vitality',
      tournament: 'BLAST Premier',
      time: '18:00',
      date: '29 окт'
    },
    {
      id: 2,
      game: 'Dota 2',
      team1: 'PSG.LGD',
      team2: 'Tundra',
      tournament: 'DreamLeague',
      time: '20:30',
      date: '29 окт'
    },
    {
      id: 3,
      game: 'Valorant',
      team1: 'LOUD',
      team2: 'Sentinels',
      tournament: 'Champions Tour',
      time: '22:00',
      date: '29 окт'
    }
  ];

  const recentResults = [
    {
      id: 1,
      game: 'CS2',
      team1: 'Heroic',
      team2: 'ENCE',
      score: '16 - 14',
      tournament: 'ESL Pro League'
    },
    {
      id: 2,
      game: 'Dota 2',
      team1: 'Evil Geniuses',
      team2: 'TSM',
      score: '2 - 0',
      tournament: 'DPC NA'
    },
    {
      id: 3,
      game: 'Valorant',
      team1: 'DRX',
      team2: 'PRX',
      score: '13 - 10',
      tournament: 'VCT Pacific'
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center neon-border">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <h1 className="text-3xl font-bold neon-glow">ESPORTS HUB</h1>
            </div>
            <nav className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="Trophy" size={20} />
                <span className="font-medium">Турниры</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="Users" size={20} />
                <span className="font-medium">Команды</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="TrendingUp" size={20} />
                <span className="font-medium">Результаты</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors flex items-center gap-2">
                <Icon name="Radio" size={20} />
                <span className="font-medium">Трансляции</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
            Прямые трансляции
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {liveTournaments.map((tournament) => (
              <Card key={tournament.id} className="bg-card border-border hover:border-primary transition-all duration-300 card-glow overflow-hidden group cursor-pointer">
                <div className="relative">
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-accent/90 text-accent-foreground live-pulse font-semibold">
                      <Icon name="Radio" size={14} className="mr-1" />
                      LIVE
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4 z-10">
                    <Badge variant="secondary" className="bg-secondary/90 font-semibold">
                      {tournament.game}
                    </Badge>
                  </div>
                  <div className="h-48 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,240,255,0.1),transparent_50%)]"></div>
                    <Icon name="Gamepad2" size={64} className="text-primary/40 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 text-primary">{tournament.tournament}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground font-medium">{tournament.match}</span>
                    </div>
                    <div className="flex items-center justify-between text-2xl font-bold">
                      <span className="text-primary">{tournament.score}</span>
                      <span className="text-sm text-muted-foreground">{tournament.map}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{tournament.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-accent">
                        <Icon name="Eye" size={16} />
                        <span className="font-semibold">{tournament.viewers}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-secondary to-primary rounded-full"></div>
              Предстоящие матчи
            </h2>
            <div className="space-y-4">
              {upcomingMatches.map((match) => (
                <Card key={match.id} className="bg-card border-border hover:border-secondary transition-all duration-300 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-3 border-secondary text-secondary">
                        {match.game}
                      </Badge>
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-lg">{match.team1}</span>
                        <span className="text-muted-foreground">vs</span>
                        <span className="font-bold text-lg">{match.team2}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">{match.tournament}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{match.time}</div>
                      <div className="text-sm text-muted-foreground">{match.date}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-accent to-secondary rounded-full"></div>
              Топ команды
            </h2>
            <Card className="bg-card border-border p-5">
              <div className="space-y-4">
                {topTeams.map((team) => (
                  <div key={team.rank} className="flex items-center justify-between hover:bg-muted/50 p-3 rounded-lg transition-colors cursor-pointer group">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-primary w-8 group-hover:scale-110 transition-transform">
                        #{team.rank}
                      </div>
                      <div className="text-3xl">{team.logo}</div>
                      <div>
                        <div className="font-bold">{team.name}</div>
                        <div className="text-sm text-muted-foreground">{team.game}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{team.rating}</div>
                      <div className={`text-sm font-semibold ${team.change.startsWith('+') ? 'text-primary' : 'text-destructive'}`}>
                        {team.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <div className="w-2 h-8 bg-gradient-to-b from-accent to-primary rounded-full"></div>
            Последние результаты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentResults.map((result) => (
              <Card key={result.id} className="bg-card border-border hover:border-accent transition-all duration-300 p-5">
                <Badge variant="outline" className="mb-3 border-accent text-accent">
                  {result.game}
                </Badge>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{result.team1}</span>
                  <span className="text-xl font-bold text-primary">{result.score}</span>
                  <span className="font-semibold">{result.team2}</span>
                </div>
                <p className="text-sm text-muted-foreground text-center">{result.tournament}</p>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 ESPORTS HUB. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
