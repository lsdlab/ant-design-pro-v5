import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'BreakWire Lab',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'BreakWire',
          title: 'BreakWire',
          href: 'https://lsdlab.github.io',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
