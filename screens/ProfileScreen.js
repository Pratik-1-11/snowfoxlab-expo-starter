import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, StatusBar } from "react-native";
import { HorizontalCards } from "../components/HorizontalCards";
import { SearchBar } from "../components/SearchBar";

export default function ProfileScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Add your search logic here
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <SearchBar 
          placeholder="Search activities..."
          onSearch={handleSearch}
          showFilter={true}
          showMic={true}
          theme="light"
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Progress</Text>
          <HorizontalCards />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <Text style={styles.emptyState}>
            {searchQuery 
              ? `No results for "${searchQuery}"` 
              : 'No recent activity to show'}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    paddingBottom: 20,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1E1E1E',
    marginBottom: 12,
  },
  emptyState: {
    color: '#999',
    textAlign: 'center',
    marginTop: 16,
    paddingHorizontal: 16,
  }
});
