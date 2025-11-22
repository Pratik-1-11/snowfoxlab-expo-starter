import React, { useRef } from 'react';
import { 
  View, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  Dimensions
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const SearchBar = ({
  placeholder = 'Search...',
  onSearch = () => {},
  showMic = true,
  value = '',
  onChangeText = () => {},
  style
}) => {
  const inputRef = useRef(null);

  const handleClear = () => {
    onChangeText('');
    inputRef.current?.focus();
  };

  return (
    <View style={[styles.container, style]}>
      <View style={styles.searchIcon}>
        <Ionicons name="search" size={20} color="#666" />
      </View>
      <TextInput
        ref={inputRef}
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#999"
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={() => onSearch(value)}
      />
      {value ? (
        <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
          <Ionicons name="close-circle" size={20} color="#999" />
        </TouchableOpacity>
      ) : showMic ? (
        <TouchableOpacity style={styles.micButton}>
          <Ionicons name="mic" size={20} color="#666" />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  searchIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333',
  },
  clearButton: {
    padding: 4,
  },
  micButton: {
    padding: 4,
  },
});

export default SearchBar;