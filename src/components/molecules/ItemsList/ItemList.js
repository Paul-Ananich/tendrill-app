import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import {
  ItemListHeader,
  FlatListContainer,
  ItemListContainer,
  ActionsContainer,
} from './styled.components';
import Box from '../Box';
import Typography from '../../atoms/Typography';

import flowerImage01 from '../../../assets/images/flower-001.png';
import BellIcon from '../../../assets/icons/bell.svg';
import AddIcon from '../../../assets/icons/add.svg';

const ItemsList = ({ navigation }) => {
  const { locationsList } = useSelector(state => state.locations);

  const handlePressItem = useCallback(
    item => {
      navigation.navigate('details', { item });
    },
    [navigation],
  );

  return (
    <ItemListContainer>
      <ItemListHeader>
        <Typography type="item-list-header">My Assets</Typography>
        <ActionsContainer>
          <BellIcon style={{ marginLeft: 16 }} />
          <AddIcon style={{ marginLeft: 16 }} />
        </ActionsContainer>
      </ItemListHeader>
      <FlatListContainer>
        <FlatList
          data={locationsList.records}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <Box
              onPress={() => handlePressItem(item)}
              source={flowerImage01}
              text={item.fields.area_name}
            />
          )}
        />
      </FlatListContainer>
    </ItemListContainer>
  );
};

export default ItemsList;
