import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import {
  ItemListHeader,
  FlatListContainer,
  ItemListContainer,
} from './styled.components';
import Box from '../Box';
import Typography from '../../atoms/Typography';

import flowerImage01 from '../../../assets/images/flower-001.png';

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
