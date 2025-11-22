import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmptyState = ({ icon: Icon, title, description, action }) => {
    return (
        <View style={styles.container}>
            {Icon && (
                <View style={styles.iconWrapper}>
                    <Icon size={32} color="#94a3b8" />
                </View>
            )}
            <View style={styles.textWrapper}>
                <Text style={styles.title}>{title}</Text>
                {description && <Text style={styles.description}>{description}</Text>}
            </View>
            {action && <View style={styles.actionWrapper}>{action}</View>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 32,
        gap: 16, // for React Native >=0.72; otherwise use margin
    },
    iconWrapper: {
        height: 64,
        width: 64,
        borderRadius: 32,
        backgroundColor: '#e2e8f0', // slate-100
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
    },
    textWrapper: {
        alignItems: 'center',
        gap: 8, // or use marginBottom for older RN versions
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        color: '#0f172a', // text-foreground
    },
    description: {
        fontSize: 14,
        textAlign: 'center',
        color: '#94a3b8', // muted text
        maxWidth: 320,
    },
    actionWrapper: {
        marginTop: 16,
    },
});

export { EmptyState };
