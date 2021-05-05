import {View} from 'react-native';
import styled from 'styled-components';

const ItemListHeader = styled(View)`
  flex: 0.05;
  margin-top: 55px;
  padding: 0 30px;
`;

const FlatListContainer = styled(View)`
  flex: 0.95;
  margin-top: 20px;
  padding-horizontal: 11px;
`;

const ItemListContainer = styled(View)`
  flex: 1;
`;

export {ItemListHeader, FlatListContainer, ItemListContainer};
