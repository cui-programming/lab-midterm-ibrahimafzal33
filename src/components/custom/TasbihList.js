import React, { useState } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import { styles } from '../styles/styles';
import { initialAzkaar } from '../data/dataAzkaar';

export default function TasbihList() {
  const [items, setItems] = useState(initialAzkaar);

  // Increment function
  const increment = (id) => {
    const updated = items.map(item => {
      return item.id === id ? { ...item, count: item.count + 1 } : item;
    });
    setItems(updated);
  };

  // Decrement function
  const decrement = (id) => {
    const updated = items.map(item => {
      // Ensure count does not go below 0
      return item.id === id && item.count > 0 ? { ...item, count: item.count - 1 } : item;
    });
    setItems(updated);
  };

  // Render each item
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.phrase}</Text>
      <Text style={styles.itemCount}>{item.count}</Text>
      <Button title="-" onPress={() => decrement(item.id)} />
      <Button title="+" onPress={() => increment(item.id)} />
    </View>
  );

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Tasbih Counter</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
