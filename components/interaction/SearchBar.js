import * as React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Search, X } from 'lucide-react-native';

const SearchBar = React.forwardRef(({ value, onChangeText, placeholder = "Search...", style, ...props }, ref) => {
    return (
        <View style={[styles.container, style]}>
            <Search size={16} color="#94a3b8" style={styles.icon} />
            <TextInput
                ref={ref}
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#94a3b8"
                {...props}
            />
            {value ? (
                <TouchableOpacity onPress={() => onChangeText('')}>
                    <X size={16} color="#94a3b8" />
                </TouchableOpacity>
            ) : null}
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: '#e2e8f0', // border-slate-200
        borderRadius: 8,
        paddingHorizontal: 12,
        backgroundColor: '#ffffff', // bg-background
    },
    icon: {
        marginRight: 8,
    },
    input: {
        flex: 1,
        height: '100%',
        fontSize: 14,
        color: '#0f172a', // text-foreground
    },
});

SearchBar.displayName = 'SearchBar';

export { SearchBar };
