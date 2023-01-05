import Statistic from 'components/molecules/Statistic/Statistic';
import { Wrapper } from 'components/organisms/Statistics/Statistics.styles';
import mockStatistics from 'data/mockStatistics';

const query = `
{
  statisticsCollection {
    items {
      value,
      description
    }
  }
}`;

const Statistics = () => {
  return (
    <Wrapper bg="primary">
      {mockStatistics.map((statistic, id) => (
        <Statistic key={id} statisticData={statistic} />
      ))}
    </Wrapper>
  );
};

export default Statistics;
