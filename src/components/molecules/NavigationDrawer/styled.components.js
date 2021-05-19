import {StyleSheet, View} from 'react-native';
import styled from 'styled-components';

const StyledTagsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const styles = StyleSheet.create({
  navigationDrawer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#FFFFFF',
    zIndex: 2,
    paddingTop: 20,
    paddingBottom: 25,
    paddingHorizontal: 30,
    alignItems: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
});

export {StyledTagsContainer};
export default styles;
