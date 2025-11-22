import * as React from 'react';
import { View, StyleSheet } from 'react-native';

const Progress = React.forwardRef(({ value = 0, max = 100, style, ...props }, ref) => {
    const percentage = Math.min(Math.max(value, 0), max) / max * 100;

    return (
        <View
            ref={ref}
            style={[styles.container, style]}
            {...props}
        >
            <View
                style={[styles.filler, { width: `${percentage}%` }]}
            />
        </View>
    );
});

Progress.displayName = 'Progress';

const styles = StyleSheet.create({
    container: {
        height: 8, // h-2
        width: '100%',
        borderRadius: 9999, // rounded-full
        overflow: 'hidden',
        backgroundColor: '#e2e8f0', // bg-secondary (light gray)
    },
    filler: {
        height: '100%',
        backgroundColor: '#0f172a', // bg-primary (dark)
    },
});

export { Progress };
