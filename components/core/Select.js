import * as React from 'react';
import { Modal, TouchableOpacity, View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { ChevronDown, X } from 'lucide-react-native';

const Select = React.forwardRef(({ label, options = [], value, onValueChange, placeholder = "Select an option", disabled, error, style, ...props }, ref) => {
  const [visible, setVisible] = React.useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}

      <TouchableOpacity
        ref={ref}
        style={[
          styles.input,
          error && styles.inputError,
          disabled && styles.disabled,
          style,
        ]}
        onPress={() => !disabled && setVisible(true)}
        disabled={disabled}
        {...props}
      >
        <Text style={[styles.inputText, !selectedOption && styles.placeholder]}>
          {selectedOption ? selectedOption.label : placeholder}
        </Text>
        <ChevronDown size={16} color="#000" style={styles.icon} />
      </TouchableOpacity>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>{label || "Select"}</Text>
              <TouchableOpacity onPress={() => setVisible(false)}>
                <X size={24} color="#000" />
              </TouchableOpacity>
            </View>

            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => {
                const isSelected = value === item.value;
                return (
                  <TouchableOpacity
                    style={[styles.optionItem, isSelected && styles.optionSelected]}
                    onPress={() => {
                      onValueChange(item.value);
                      setVisible(false);
                    }}
                  >
                    <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
                      {item.label}
                    </Text>
                    {isSelected && <View style={styles.selectedIndicator} />}
                  </TouchableOpacity>
                );
              }}
            />
            <SafeAreaView />
          </View>
        </View>
      </Modal>
    </View>
  );
});

Select.displayName = 'Select';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 6,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#374151', // slate-700
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    width: '100%',
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb', // slate-200
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: '#ef4444', // red-500
  },
  disabled: {
    opacity: 0.5,
  },
  inputText: {
    fontSize: 14,
    color: '#111827', // slate-900
  },
  placeholder: {
    color: '#9ca3af', // muted
  },
  icon: {
    opacity: 0.5,
  },
  errorText: {
    fontSize: 12,
    color: '#ef4444', // red-500
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb', // slate-100
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  optionItem: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f8fafc', // slate-50
  },
  optionSelected: {
    backgroundColor: '#f1f5f9', // slate-50
  },
  optionText: {
    fontSize: 16,
    color: '#111827',
  },
  optionTextSelected: {
    fontWeight: '500',
    color: '#3b82f6', // primary
  },
  selectedIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3b82f6', // primary
  },
});

export { Select };
