import { Panel, Header,Group, Div,Banner,Image,Button} from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import {Allow_Messages} from '../utils/allow_messages';

export const Home = ({id}) => {
  return (
    <Panel id={id}>


      <Group header={<Header size="s"></Header>}>
        <Div>
        <Banner
          before={
            <Image
              size={96}
              src="https://sun9-63.userapi.com/yOEQYPHrNHjZEoanbqPb65HPl5iojmiLgLzfGA/W3geVMMt8TI.jpg"
            />
          }
          title="Парк-отель Кленовая Роща"
          subtitle="Подписывайтесь на рассылку сообщений, чтобы оставаться в курсе последних новостей нашего Парк-отеля, а также для получения эксклюзивных скидок и для участия в специальных акциях"
          actions={<Button onClick={ () => Allow_Messages() }>Подписаться на рассылку</Button>}
        />
        </Div>
      </Group>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  fetchedUser: PropTypes.shape({
    id: PropTypes.number,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};
