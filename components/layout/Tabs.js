import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Tabs = ({ tabs, activeTab, onTabChange, style }) => {
  return (
    <View style={[styles.container, style]}>
      {tabs.map((tab) => {
        const isActive = tab.value === activeTab;
        return (
          <TouchableOpacity
            key={tab.value}
            onPress={() => onTabChange(tab.value)}
            style={[
              styles.tab,
              isActive ? styles.activeTab : styles.inactiveTab,
            ]}
          >
            <Text style={[styles.tabLabel, isActive ? styles.activeLabel : styles.inactiveLabel]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: '#E5E7EB', // muted
    padding: 4,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  activeTab: {
    backgroundColor: '#FFFFFF', // background
    elevation: 2, // shadow for Android
    shadowColor: '#000', // shadow for iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  inactiveTab: {
    backgroundColor: 'transparent',
  },
  tabLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  activeLabel: {
    color: '#0F172A', // foreground
  },
  inactiveLabel: {
    color: '#6B7280', // muted-foreground
  },
});

export { Tabs };
