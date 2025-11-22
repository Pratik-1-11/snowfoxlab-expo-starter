import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SectionHeader = ({ title, subtitle, action, onAction, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
      {action && (
        <TouchableOpacity onPress={onAction}>
          <Text style={styles.action}>{action}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a', // Replace with your foreground color
  },
  subtitle: {
    fontSize: 14,
    color: '#6b7280', // Replace with your muted color
  },
  action: {
    fontSize: 14,
    fontWeight: '500',
    color: '#3b82f6', // Replace with your primary color
  },
});

export { SectionHeader };
