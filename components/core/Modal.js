import * as React from 'react';
import { Modal as RNModal, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { X } from 'lucide-react-native';

const Modal = ({ visible, onClose, title, children, style, ...props }) => {
  return (
    <RNModal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
      {...props}
    >
      <View style={styles.overlay}>
        <View style={[styles.modalContainer, style]}>
          <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <X size={20} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.content}>
            {children}
          </View>
        </View>
      </View>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  modalContainer: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // for Android shadow
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb', // slate-100
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827', // slate-900
  },
  content: {
    padding: 16,
  },
});

Modal.displayName = 'Modal';

export { Modal };
