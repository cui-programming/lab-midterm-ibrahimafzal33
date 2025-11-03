import React, { useState } from 'react';
import { View, FlatList, Text, TextInput, Button } from 'react-native';
import { styles } from '../styles/styles';

const initialData = [
  { id: '1', phrase: 'SubhanAllah', count: 0 },
  { id: '2', phrase: 'Alhamdulillah', count: 0 },
  { id: '3', phrase: 'Allahu Akbar', count: 0 },
];

export default function SearchAndAdd() {
  const [items, setItems] = useState(initialData);
  const [search, setSearch] = useState('');
  const [newPhrase, setNewPhrase] = useState('');

  const filteredItems = items.filter(it =>
    it.phrase.toLowerCase().includes(search.toLowerCase().trim())
  );

  function handleAdd() {
    const trimmed = newPhrase.trim();
    if (!trimmed) return;

    // Check if the item already exists (case-insensitive)
    const exists = items.some(it => 
      it.phrase.toLowerCase() === trimmed.toLowerCase()
    );
    if (exists) return;

    // Create a new item
    const newItem = {
      id: Date.now().toString(), // Use timestamp as a unique ID
      phrase: trimmed,
      count: 0,
    };

    setItems([...items, newItem]);
    setNewPhrase(''); // Clear the input field
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Search & Add</Text>

      {/* Search Input */}
      <TextInput
        placeholder="Search phrase..."
        value={search}
        onChangeText={setSearch}
        style={styles.input}
      />

      {/* Add New Phrase Input and Button */}
      <View style={styles.styles.addRow}> 
        <TextInput
          placeholder="Add new phrase..."
          value={newPhrase}
          onChangeText={setNewPhrase}
          style={styles.input}
        />
        <Button title="Add" onPress={handleAdd} />
      </View>

      {/* Filtered List */}
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemName}>{item.phrase}</Text>
            {/* The image shows a count in the renderItem, but the code is cut off. 
               Assuming it's meant to display the count: */}
            <Text style={styles.itemCount}>({item.count})</Text> 
          </View>
        )}
      />
    </View>
  );
}
