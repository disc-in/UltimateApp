import * as React from 'react';
import { Text } from 'react-native';
import { Menu, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import theme from '../../styles/theme.style';
import I18n from '../../utils/i18n';

class CurrentDrillManagerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openMenu = () => {
    this.setState({ visible: true });
  };
  closeMenu = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <Menu
        visible={this.state.visible}
        onDismiss={() => this.closeMenu()}
        anchor={
          <MaterialCommunityIcons
            name="dots-vertical"
            onPress={() => this.openMenu()}
            color={theme.COLOR_PRIMARY}
            size={26}
          />
        }
      >
        <Text style={{ paddingLeft: 10, fontWeight: 'bold' }}>Test</Text>
        <Menu.Item
          onPress={() => {
            this.props.save();
            this.closeMenu();
          }}
          icon="content-save-outline"
          title={I18n.t('drillEditor.drillManager.save')}
        />
        <Menu.Item
          onPress={() => {
            this.props.rename();
            this.closeMenu();
          }}
          icon="pencil"
          title={I18n.t('drillEditor.drillManager.rename')}
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            this.props.contribute();
            this.closeMenu();
          }}
          icon="share-outline"
          title={I18n.t('drillEditor.drillManager.cta')}
        />
      </Menu>
    );
  }
}

export default CurrentDrillManagerMenu;
