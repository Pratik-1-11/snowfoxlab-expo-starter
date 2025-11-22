import * as React from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { X } from 'lucide-react-native';

const Snackbar = ({ visible, message, action, onAction, onClose, duration = 3000, style }) => {
  const opacity = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (visible) {
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      if (duration > 0) {
        const timer = setTimeout(() => {
          handleClose();
        }, duration);
        return () => clearTimeout(timer);
      }
    } else {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  const handleClose = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      if (onClose) onClose();
    });
  };

  if (!visible) return null;

  return (
    <Animated.View style={[styles.snackbar, { opacity }, style]}>
      <Text style={styles.message}>{message}</Text>
      <View style={styles.actions}>
        {action && (
          <TouchableOpacity onPress={onAction} style={{ marginRight: 8 }}>
            <Text style={styles.actionText}>{action}</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={handleClose}>
          <X size={16} color="#94a3b8" />
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    zIndex: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#111827', // slate-900
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  message: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3b82f6', // primary
  },
});

export { Snackbar };
