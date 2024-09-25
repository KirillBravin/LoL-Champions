import "./championInfoDifficulty.scss";

interface difficultyObj {
  id: number;
  difficulty: number[];
  render: () => JSX.Element;
}

export function ChampionInfoDifficulty({
  difficultyId,
}: {
  difficultyId: number;
}) {
  const difficultyObj: difficultyObj[] = [
    {
      id: 1,
      difficulty: [0, 1, 2, 3],
      render: function () {
        return (
          <div className={`difficulty__icons style`}>
            <span className="parallelogramFilled"></span>
            <span className="parallelogramEmpty"></span>
            <span className="parallelogramEmpty"></span>
          </div>
        );
      },
    },
    {
      id: 2,
      difficulty: [4, 5, 6, 7],
      render: function () {
        return (
          <div className={`difficulty__icons style`}>
            <span className="parallelogramFilled"></span>
            <span className="parallelogramFilled"></span>
            <span className="parallelogramEmpty"></span>
          </div>
        );
      },
    },
    {
      id: 3,
      difficulty: [8, 9, 10],
      render: function () {
        return (
          <div className={`difficulty__icons style`}>
            <span className="parallelogramFilled"></span>
            <span className="parallelogramFilled"></span>
            <span className="parallelogramFilled"></span>
          </div>
        );
      },
    },
  ];

  return difficultyObj[difficultyId].render();
}
