import { View } from 'react-native';
import styled from 'styled-components';

const ItemListHeader = styled(View)`
  flex: 0.05;
  margin-top: 55px;
  padding: 0 30px;
  flex-direction: row;
  justify-content: space-between;
`;

const FlatListContainer = styled(View)`
  flex: 0.95;
  margin-top: 20px;
  padding-horizontal: 11px;
`;

const ItemListContainer = styled(View)`
  flex: 1;
`;

const ActionsContainer = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export { ItemListHeader, FlatListContainer, ItemListContainer, ActionsContainer };
