import Statistic from 'components/molecules/Statistic/Statistic';
import { Wrapper } from 'components/organisms/Statistics/Statistics.styles';

const Statistics = ({ contentData }) => (
  <Wrapper bg="primary">
    {contentData.statistics.map((statistic, id) => (
      <Statistic key={id} statisticData={statistic} />
    ))}
  </Wrapper>
);

export default Statistics;
